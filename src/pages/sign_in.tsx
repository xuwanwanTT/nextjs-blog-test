import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from 'react';
import { withSession } from '../../lib/withSession';
import { User } from '../../db/entity/User';
import { Form } from '@/components/form/Form';

const SignIn: NextPage<{ user: User }> = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: [], password: []
  })

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setErrors({
      username: [], password: []
    });

    axios.post(`/api/v1/sessions`, formData).then(() => {
      window.alert('登录成功');
    }, error => {
      const response: AxiosResponse = error.response;
      if (response.status === 422) {
        setErrors(response.data);
      }
    });
  }, [formData]);

  const handleChange = useCallback((key: string, value: string) => {
    setFormData({ ...formData, [key]: value })
  }, [formData]);

  return (
    <>
      {props.user &&
        <div>
          当前登录用户为 {props.user.username}
        </div>
      }
      <h1>登录</h1>
      <Form fields={[
        {
          label: '用户名',
          type: 'text',
          value: formData.username,
          onChange: e => handleChange('username', e.target.value),
          errors: errors.username
        },
        {
          label: '密码',
          type: 'password',
          value: formData.password,
          onChange: e => handleChange('password', e.target.value),
          errors: errors.password
        }
      ]} onSubmit={handleSubmit} buttons={(
        <>
          <button type='submit'>登录</button>
        </>
      )} />
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
