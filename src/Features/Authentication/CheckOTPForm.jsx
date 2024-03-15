import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { CheckOtp } from '../../Services/AuthService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { HiChevronRight, HiOutlineClock, HiOutlineRefresh } from "react-icons/hi"
import { CiEdit } from "react-icons/ci";
import Loading from '../../UI/Loading'

const RESEND_TIME = 90

const CheckOTPForm = ({phoneNumber , OnBackHandler , ResendOtpHandler , OtpResponse}) => {
  const [otp , setOtp] = useState(232613)
  const [time , setTime] = useState(RESEND_TIME)
  const navigate = useNavigate()
  const {isPending , error , data , mutateAsync} = useMutation({
    mutationFn: CheckOtp
  })
  const CheckOtpHandler = async (event) => {
    event.preventDefault()
    try {
    const {message , user } = await mutateAsync({phoneNumber , otp})
     toast.success(message)
     if(user.isActive){
        // push to panel based on role
        if(user.role === "OWNER") navigate("/owner")
        if(user.role === "FREELANCER") navigate("/freelancer")
     }else{
        navigate("/completeProfile")
     }
    }catch(error) {
      
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(()=> {
    const optTimer = time > 0 && setInterval(() => setTime((prev) => prev - 1) , 1000)
    return () => {
        if(optTimer) clearInterval(optTimer)
    }
    }, [time])
  return (
    <>
      <button onClick={OnBackHandler}><HiChevronRight className='size-6 text-secondary-500'/></button>
      <form onSubmit={CheckOtpHandler}>
        <p className='font-MorabbaBold text-secondary-800 text-2xl my-5'>کد تایید را وارد نمایید</p>
        {
          OtpResponse && <p className='text-base flex-center gap-1 my-3'><span>{OtpResponse?.message}</span><button onClick={OnBackHandler}><CiEdit className='size-5 text-sky-500'/></button></p>
        }
        <OTPInput value={otp} onChange={setOtp} numInputs={6} renderInput={(props) => <input type='number' className='appearance-none' {...props} />} renderSeparator={<span> - </span>} containerStyle="flex flex-row-reverse justify-center mb-7" inputStyle={{width: '2.5rem', padding: "0.5rem", borderRadius: ".5rem" , margin: "0 .3rem" , border: "1px solid rgb(var(--color-primary-300))" , outline: "none"}}/>
         <div className='flex-center my-4'>
           {time > 0 ? <p className='font-DanaMd flex-center gap-1 text-secondary-500'><HiOutlineClock className="size-6"/> <span>{time} ثانیه تا ارسال مجدد کد</span></p> : <button onClick={ResendOtpHandler} className='flex-center gap-1'><HiOutlineRefresh /><span> ارسال مجدد کد تایید</span></button>}
         </div>
         {
          isPending ? <Loading /> :
        <button type='submit' className='btn btn-primary w-full'>تایید</button>
         }
      </form>
    </>
  )
}

export default CheckOTPForm