import { Form } from '@/components/form/Form';
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { useCallback, useState } from 'react';

const SignUp: NextPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const [errors, setErrors] = useState({
    username: [], password: [], passwordConfirmation: []
  })

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post(`/api/v1/users`, formData).then(() => {
      window.alert('注册成功');
      window.location.href = '/sign_in';
    }, error => {
      const response: AxiosResponse = error.response;
      if (response.status === 422) {
        setErrors(response.data);
      }
    });
  }, [formData]);

  const handleChange = useCallback((key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  }, [formData]);

  return (
    <>
      <h1>注册</h1>
      <Form fields={[
        {
          label: '用户名',
          type: 'text',
          value: formData.username,
          onChange: e => handleChange('username', e.target.value),
          errors: errors.username,
        },
        {
          label: '密码',
          type: 'password',
          value: formData.password,
          onChange: e => handleChange('password', e.target.value),
          errors: errors.password,
        },
        {
          label: '确认密码',
          type: 'password',
          value: formData.passwordConfirmation,
          onChange: e => handleChange('passwordConfirmation', e.target.value),
          errors: errors.passwordConfirmation,
        }
      ]} onSubmit={handleSubmit} buttons={(
        <>
          <button type='submit'>注册</button>
        </>
      )} />
    </>
  );
};

export default SignUp;
