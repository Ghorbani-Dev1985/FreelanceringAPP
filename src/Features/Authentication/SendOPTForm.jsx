import React from 'react'
import TextField from '../../UI/TextField'
import Logo from "./../../Assets/Images/Logo/logo.png"
import Loading from '../../UI/Loading'
const SendOPTForm = ({SendOtpHandler , isPendingOtp , register}) => {
    
  return (
    <>
      <div className='flex-center mb-8'><img src={Logo} className='w-56' alt='ghorbani-dev.ir'/></div>
       <h2 className='font-MorabbaBold mb-4'>ورود | ثبت نام</h2>
        <form className='w-full space-y-11' onSubmit={SendOtpHandler}>
            <TextField label="شماره موبایل" name="PhoneNumber" register={register} ltr placeholder=" لطفا شماره موبایل خودتو وارد کن"/>
            {
              isPendingOtp ? <Loading /> :
              <button type='submit' className='btn btn-primary w-full'>ارسال کد تایید</button>
            }
        </form>
    </>
  )
}

export default SendOPTForm