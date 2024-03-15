import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { CheckOtp } from '../../Services/AuthService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CheckOTPForm = ({phoneNumber}) => {
  const [otp , setOtp] = useState(232613)
  const navigate = useNavigate()
  const {isPending , error , data , mutateAsync} = useMutation({
    mutationFn: CheckOtp
  })
  const CheckOtpHandler = async (event) => {
    event.preventDefault()
    try {
    const {message , user} = await mutateAsync({phoneNumber , otp})
     toast.success(message)
     if(user.isActive){
        // push to panel based on role
        if(user.role === "OWNER") navigate("/owner")
        if(user.role === "FREELANCER") navigate("/freelancer")
     }else{
        navigate("/completeProfile")
     }
    } catch (error) {
      toast.error(error?.response?.message)
    }
  }
  return (
    <div>
      <form onSubmit={CheckOtpHandler}>
        <p className='font-MorabbaBold text-secondary-800 text-2xl my-5'>کد تایید را وارد نمایید</p>
        <OTPInput value={otp} onChange={setOtp} numInputs={6} renderInput={(props) => <input type='number' className='appearance-none' {...props} />} renderSeparator={<span> - </span>} containerStyle="flex flex-row-reverse justify-center mb-7" inputStyle={{width: '2.5rem', padding: "0.5rem", borderRadius: ".5rem" , margin: "0 .3rem" , border: "1px solid rgb(var(--color-primary-300))" , outline: "none"}}/>
        <button className='btn btn-primary w-full'>تایید</button>
      </form>
    </div>
  )
}

export default CheckOTPForm