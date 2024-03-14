import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

const CheckOTPForm = () => {
  const [otp , setOtp] = useState(232613)
  return (
    <div>
      <form>
        <p className='font-MorabbaBold text-secondary-800 text-2xl my-5'>کد تایید را وارد نمایید</p>
        <OTPInput value={otp} onChange={setOtp} numInputs={6} renderInput={(props) => <input type='number' className='appearance-none' {...props} />} renderSeparator={<span> - </span>} containerStyle="flex flex-row-reverse justify-center mb-7" inputStyle={{width: '2.5rem', padding: "0.5rem", borderRadius: ".5rem" , margin: "0 .3rem" , border: "1px solid rgb(var(--color-primary-300))" , outline: "none"}}/>
        <button className='btn btn-primary w-full'>تایید</button>
      </form>
    </div>
  )
}

export default CheckOTPForm