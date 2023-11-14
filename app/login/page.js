'use client'

import React,{ useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios'

import { useRouter } from 'next/navigation'

const Page = () => {

    useEffect(()=>{
        document.title="Login"
    },[])

    const router=useRouter()

    const onFinish = (values) => {
        axios.post('https://1415-49-37-114-166.ngrok-free.app/login',values)
        .then((res)=>{
            if(res.data.status=="200"){
                window.localStorage.setItem('rev-token',JSON.stringify(res.data.user))
                console.log(res)
                router.push('/dashboard')
            }
            else{
                message.info(res.data.message)
            }
        }) 
    };

    const loginStyle={
        width:"300px",
        padding:"1em",
        position:"absolute",
        top:"0",
        bottom:"0",
        left:"0",
        right:"0",
        backgroundColor:"lightblue",
        height:"max-content",
        margin:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        textAlign:"center",
        boxShadow:"3px 3px 7px 3px black",
    }

    
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={loginStyle}
    >
        <h1>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div> Or <a onClick={()=>router.push('/signup')}>register now!</a></div>
         
      </Form.Item>
    </Form>
  );
};
export default Page;