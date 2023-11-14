'use client'
import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import {Button} from 'antd';
import { useRouter } from 'next/navigation'


export default function Page() {
    const router=useRouter()
    const [user,setUser]=useState(JSON.parse(window.localStorage.getItem('rev-token')))

    // useEffect(()=>{
    //     axios.get('http://localhost:8080/user/',{uid:window.localStorage.getItem('token')})
    //     .then((res)=>{
    //         if(res.data.status=="200"){
    //             setUser(res.data.user)
    //             console.log(res.data)
    //         }
    //         else{
    //             console.log(res.data.message)
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[]);

    const getApi=()=>{
        axios.post('http://localhost:8080/apiKey',{username:user.username})
        .then((res)=>{
            if(res.data.status=="200"){
                console.log(res.data.user)
                setUser(res.data.user)
            }
            else{
                console.log(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    };

    return (
        <div>
            {user.name ? <h1>Welcome {user.name}</h1> : null}
            {user.apiKey?<div>{user.apiKey}</div>:null}
            <Button onClick={getApi}>Get API Key</Button>
            <Button onClick={()=>{window.localStorage.removeItem('rev-token');router.push("/")}} style={{position:"abosule",top:"0",right:"0"}}>Log Out</Button>

        </div>
    )
  }