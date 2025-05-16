import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { withSession } from '../../lib/withSession';
import { User } from '../../db/entity/User';
import { useForm } from '@/hooks/useForm';

const SignIn: NextPage<{ user: User }> = (props) => {
  const { form } = useForm({
    initFormData: { username: '', password: '' },
    fields: [
      { label: '用户名', type: 'text', key: 'username' },
      { label: '密码', type: 'password', key: 'password' }
    ],
    buttons: <button type='submit'>登录</button>,
    submit: {
      request: formData => axios.post(`/api/v1/sessions`, formData),
      message: '登录成功'
    }
  });

  return (
    <>
      {props.user &&
        <div>
          当前登录用户为 {props.user.username}
        </div>
      }
      <h1>登录</h1>
      {form}
    </>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps<any, any> = withSession(async (context) => {

  // @ts-ignore
  const user = context.req.session.get('currentUser');

  return {
    props: {
      user: user !== undefined ? JSON.parse(JSON.stringify(user)) : null
    }
  };
});
