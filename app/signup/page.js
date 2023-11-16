'use client'

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,message } from 'antd';
import { useRouter } from 'next/navigation'

import { useState,useEffect } from 'react';

import axios from 'axios'

const Page = () => {

    useEffect(()=>{
        document.title="Login"
        if(window.localStorage.getItem('rev-token')){
            router.push('/dashboard')
        }
    },[])

    const router=useRouter()
    const onFinish = (values) => {
        if(values.password!==values.cpassword){
            message.info("Passwords don't match")
            return
        }
        console.log('Received values of form: ', values);
        axios.post('https://dashboardapi.fly.dev/register',values)
            .then((res)=>{
                if(res.data.status=="200"){
                    window.localStorage.setItem('rev-token',res.data.user._id)
                    router.push('/dashboard')
                }
                else{
                    message.info(res.data.message)
                }
            })
            .catch((err)=>{
            console.log(err)
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
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"/>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>
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
          prefix={<LockOutlined className="site-form-item-icon"/>}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="cpassword"
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
          placeholder="Confirm Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <div> Or <a onClick={()=>router.push('/login')}>Login!</a></div>
         
      </Form.Item>
    </Form>
  );
};
export default Page;