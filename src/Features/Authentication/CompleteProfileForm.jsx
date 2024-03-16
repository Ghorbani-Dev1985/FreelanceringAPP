import React, { useState } from 'react'
import TextField from '../../UI/TextField'
import RadioInput from '../../UI/RadioInput'
import { useMutation } from '@tanstack/react-query'
import { CompleteProfile } from '../../Services/AuthService'
import toast from 'react-hot-toast'
import Loading from '../../UI/Loading'
import { useNavigate } from 'react-router-dom'
import {AuthLayout} from "./AuthContainer"
import CompleteProfileImg from "./../../Assets/Images/CompleteProfile/completeProfile.png"

const CompleteProfileForm = () => {
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
    const [role , setRole] = useState("")
    const navigate = useNavigate()
   const {mutateAsync , isPending} = useMutation({
        mutationFn: CompleteProfile
    })
    const CompleteProfileHandler = async (event) => {
      event.preventDefault()
      try {
        const {message , user } = await mutateAsync({fullName , email , role})
        console.log(user)
         toast.success(message)
        if(user.status !== 2){
            navigate("/")
            toast("پروفایل شما در انتظار تایید می باشد" , {icon: "⏳"})
            return
        }
        if(user.role === "OWNER") return navigate("/owner")
     if(user.role === "FREELANCER") return navigate("/freelancer")
        }catch(error) {
          
          toast.error(error?.response?.data?.message)
        }
    }
  return (
    <>
    <section className='flex h-screen'>
    <AuthLayout imgSrc={CompleteProfileImg} title="پروفایل خودتو تکمیل کن" subTitle="این کار و که انجام بدی مشخص میشه که کارفرما هستی یا فریلنسر تا بتونی از قابلیت های اپ کاملا استفاده کنی پس همین الان فرم رو تکمیلش کن">
        <div className='flex-center my-4'><h2 className='font-MorabbaBold text-2xl'>تکمیل اطلاعات کاربری</h2></div>   
        <form onSubmit={CompleteProfileHandler} className='space-y-8'>
        <TextField label=" نام و نام خانوادگی" name="FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder=" نام و نام خانوادگی خود را وارد نمایید"/>
        <TextField label=" ایمیل" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} ltr placeholder=" ایمیل خود را وارد نمایید"/>
        <div className='flex-center gap-x-8'>   
                <RadioInput label="کارفرما" name="role" value="OWNER" onChange={(e) => setRole(e.target.value)} checked={role === "OWNER"}/>
                <RadioInput label="فریلنسر" name="role" value="FREELANCER" onChange={(e) => setRole(e.target.value)} checked={role === "FREELANCER"}/>
        </div>
        {
          isPending ? <Loading /> :
          <button type='submit' className='btn btn-primary w-full'>ثبت اطلاعات</button>
        }
        </form>
    </AuthLayout>
        </section>
      </>
  )
}

export default CompleteProfileForm