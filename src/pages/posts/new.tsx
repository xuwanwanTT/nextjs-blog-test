import { Form } from "@/components/form/Form";
import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useCallback, useState } from "react";

const PostsNew: NextPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [errors, setErrors] = useState({
    title: [], content: []
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setErrors({
      title: [], content: []
    });

    axios.post(`/api/v1/posts`, formData).then(() => {
      window.alert('提交成功');
    }, error => {
      const response: AxiosResponse = error.response;
      if (response.status === 422) {
        setErrors(response.data);
      }
    });
  }, [formData]);

  const handleChange = useCallback((key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  }, [formData])

  return (
    <div>
      <Form fields={[
        {
          label: '标题',
          type: 'text',
          value: formData.title,
          onChange: e => handleChange('title', e.target.value),
          errors: errors.title
        },
        {
          label: '内容',
          type: 'textarea',
          value: formData.content,
          onChange: e => handleChange('content', e.target.value),
          errors: errors.title
        }
      ]} onSubmit={handleSubmit} buttons={(
        <>
          <button type='submit'>提交</button>
        </>
      )} />
    </div>
  );
};

export default PostsNew;
