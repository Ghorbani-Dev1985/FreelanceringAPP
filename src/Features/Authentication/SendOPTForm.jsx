import React, { useState } from 'react'
import TextField from '../../UI/TextField'
import { useMutation } from '@tanstack/react-query'
import { GetOtp } from '../../Services/AuthService'
import toast from 'react-hot-toast'

const SendOPTForm = () => {
    const [phoneNumber , setPhoneNumber] = useState('')
  const {isPending, error, data, mutateAsync} = useMutation({
      mutationFn: GetOtp,
    })
    const SendOtpHandler = async (event) => {
      event.preventDefault()
      try {
      const data = await mutateAsync({phoneNumber})
      console.log(data)
      toast.success(data.message)
      } catch (error) {
        toast.error(error?.response?.message)
      }
    }
  return (
    <div>
        <form className='w-full space-y-8' onSubmit={SendOtpHandler}>
            <TextField label="شماره موبایل" name="PhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="شماره موبایل خود را وارد نمایید"/>
            <button type='submit' className='btn btn-primary w-full'>ارسال کد تایید</button>
        </form>
    </div>
  )
}

export default SendOPTForm