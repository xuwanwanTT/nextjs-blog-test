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

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    // console.log(formData);
    setErrors({
      username: [], password: [], passwordConfirmation: []
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

  return (
    <>
      <h1>登录</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            用户名
            <input type='text' value={formData.username} onChange={e => {
              setFormData({
                ...formData,
                username: e.target.value
              })
            }} />
          </label>

          {errors.username?.length > 0 && (
            <div>{errors.username.join(',')}</div>
          )}
        </div>

        <div>
          <label>
            密码
            <input type='password' value={formData.password} onChange={e => {
              setFormData({
                ...formData,
                password: e.target.value
              })
            }} />
          </label>

          {errors.password?.length > 0 && (
            <div>{errors.password.join(',')}</div>
          )}
        </div>

        <div>
          <button type='submit'>登录</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
