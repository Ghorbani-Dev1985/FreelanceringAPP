import React, { useState } from 'react'
import TextField from '../../UI/TextField'

const SendOPTForm = () => {
    const [phoneNumber , setPhoneNumber] = useState('')
  return (
    <div>
        <form className='w-full space-y-8'>
            <TextField label="شماره موبایل" name="PhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="شماره موبایل خود را وارد نمایید"/>
            <button className='btn btn-primary w-full'>ارسال کد تایید</button>
        </form>
    </div>
  )
}

export default SendOPTForm