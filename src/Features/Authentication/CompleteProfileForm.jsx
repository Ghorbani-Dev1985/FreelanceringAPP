import React from 'react'
import TextField from '../../UI/TextField'
import { useMutation } from '@tanstack/react-query'
import { CompleteProfile } from '../../Services/AuthService'
import toast from 'react-hot-toast'
import Loading from '../../UI/Loading'
import { useNavigate } from 'react-router-dom'
import {AuthLayout} from "./AuthContainer"
import CompleteProfileImg from "./../../Assets/Images/CompleteProfile/completeProfile.png"
import { useForm } from 'react-hook-form'
import RadioInputGroup from '../../UI/RadioInputGroup'

const CompleteProfileForm = () => {
    const {handleSubmit , register , watch , formState: {errors} } = useForm()
    const navigate = useNavigate()
   const {mutateAsync , isPending} = useMutation({
        mutationFn: CompleteProfile
    })
    const CompleteProfileHandler = async (data) => {
      console.log(data)
      try {
        const {message , user } = await mutateAsync(data)
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
        <div className='flex-center my-4'><h2 className='font-MorabbaBold text-2xl mb-8'>تکمیل اطلاعات کاربری</h2></div>   
        <form onSubmit={handleSubmit(CompleteProfileHandler)} className='space-y-4'>
        <TextField label=" نام و نام خانوادگی" name="name" register={register} placeholder=" لطفا نام و نام خانوادگی خودتو وارد کن" 
        validationSchema={
          {
              required: "نام و نام خانوادگی اجباریه",
              minLength:{
                  value: 5,
                  message: "حداقل ۵ کاراکتر باید وارد بشه"
              },
              maxLength: {
                  value: 30,
                  message: "حداکثر می تونی ۳۰ کاراکتر وارد کنی"
              },
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/g,
                message: "نام و نام خانوادگی نامعتبره",
              },
          }
      } errors={errors}/>
        <TextField label=" ایمیل" name="email" register={register} ltr placeholder=" لطفا ایمیل خودتو وارد کن" 
        validationSchema={
          {
              required: "ایمیل اجباریه",
              minLength:{
                  value: 5,
                  message: "حداقل ۵ کاراکتر باید وارد بشه"
              },
              maxLength: {
                  value: 30,
                  message: "حداکثر می تونی ۳۰ کاراکتر وارد کنی"
              },
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}/g,
                message: "ایمیلی که وارد کردی نامعتبره",
              }
          }
      } errors={errors}/>
        <RadioInputGroup 
         errors={errors}
         register={register}
         watch={watch}
         configs={
          {
            name: 'role',
            validationSchema: {required: "انتخاب نقش کاربری اجباریه"},
            options: [
              {value: "OWNER" , label: "کارفرما" },
              {value: "FREELANCER" , label: "فریلنسر" },
            ]
          }
         }
        />
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