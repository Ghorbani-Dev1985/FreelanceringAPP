import React, { useState } from 'react'
import SendOTPForm from './SendOPTForm'
import CheckOTPForm from './CheckOTPForm'
import CenterLogin from './../../Assets/Images/Login/centerLogin.png'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { GetOtp } from '../../Services/AuthService'
import CompleteProfileForm from './CompleteProfileForm'


const AuthContainer = () => {
    const [step , setStep] = useState(2)
    const [phoneNumber , setPhoneNumber] = useState('')
    const {isPending : isPendingOtp, error, data: OtpResponse, mutateAsync} = useMutation({
        mutationFn: GetOtp,
      })
      const SendOtpHandler = async (event) => {
        event.preventDefault()
        try {
        const data = await mutateAsync({phoneNumber})
        setStep(2)
        toast.success(data.message)
        } catch (error) {
            console.log(error)
          toast.error(error?.response?.data?.message)
        }
      }
    const RenderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm phoneNumber={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} SendOtpHandler={SendOtpHandler} isPendingOtp={isPendingOtp}/>
            case 2:
                return <CheckOTPForm phoneNumber={phoneNumber} OnBackHandler={() => setStep((prev) => prev - 1)} ResendOtpHandler={SendOtpHandler} OtpResponse={OtpResponse}/> 
            default:
                break;
        }
    }
  return (
    <>
    <div className='h-full w-full lg:w-[30%] lg:bg-gray-100 bg-gray-100 flex-center lg:justify-end'>
        <div className='w-full max-w-sm lg:ml-[-200px] z-20 relative'><div className='bg-white rounded-2xl p-8 w-full'>{RenderStep()}</div></div>
    </div>
        <div className='hidden lg:block h-full w-[70%] rounded-tr-4xl rounded-br-4xl z-0 bg-gradient-to-tr from-primary-900 to-primary-800'>
            <div className='flex-center h-full w-full'>
                <div className='max-w-lg flex-center flex-col'>
                    <img src={CenterLogin} alt='ghorbani-dev.ir' className='size-96' />
                    <h3 className='font-MorabbaBold text-white text-3xl my-6'>پروژه مورد نظرتو پیدا کن</h3>
                    <p className='text-white text-justify mt-8'>
                        به راحتی می تونی کارفرما های مختلف با پروژه های متفاوتی که تعریف می کنن رو پیدا کنی و بهشون پیشنهاد بدی و وارد مذاکره بشی تا 
                        بتونی پروژه بگیری و انجامش بدی و بیکار نمونی و هرجا نیاز به مشاوره داشتی ما هستیم
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AuthContainer