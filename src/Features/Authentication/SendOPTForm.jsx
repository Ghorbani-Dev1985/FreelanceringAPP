import React, { useState } from 'react'
import TextField from '../../UI/TextField'
import { useMutation } from '@tanstack/react-query'
import { GetOtp } from '../../Services/AuthService'
import toast from 'react-hot-toast'
import Logo from "./../../Assets/Images/Logo/logo.png"
const SendOPTForm = () => {
    const [phoneNumber , setPhoneNumber] = useState('')
    
  const {isPending, error, data, mutateAsync} = useMutation({
      mutationFn: GetOtp,
    })
    const SendOtpHandler = async (event) => {
      event.preventDefault()
      try {
      const data = await mutateAsync({phoneNumber})
      setStep(2)
      toast.success(data.message)
      } catch (error) {
        toast.error(error?.response?.message)
      }
    }
  return (
    <>
      <div className='flex-center mb-8'><img src={Logo} className='w-56' alt='ghorbani-dev.ir'/></div>
       <h2 className='font-DanaBold mb-4'>ورود | ثبت نام</h2>
        <form className='w-full space-y-11' onSubmit={SendOtpHandler}>
            <TextField label="شماره موبایل" name="PhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="شماره موبایل خود را وارد نمایید"/>
            <button type='submit' className='btn btn-primary w-full'>ارسال کد تایید</button>
        </form>
    </>
  )
}

export default SendOPTForm