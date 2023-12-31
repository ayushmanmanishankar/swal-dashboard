'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
    const router=useRouter()
    useEffect(()=>{
        if(window.localStorage.getItem('rev-token')){
            router.push('/dashboard')
        }
        else{
            router.push('/login')
        }
    },[])
}