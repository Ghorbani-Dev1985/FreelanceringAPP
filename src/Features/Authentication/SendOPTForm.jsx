import React, { useState } from 'react'

const SendOPTForm = () => {
    const [phoneNumber , setPhoneNumber] = useState('')
  return (
    <div>
        <form className='w-full space-y-8'>
            <div >
                <label htmlFor='PhoneNumber' className='mb-1'>شماره موبایل</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id='PhoneNumber' placeholder='شماره موبایل' type='text' className='textField-input' />
            </div>
            <button className='btn btn-primary w-full'>ارسال کد تایید</button>
        </form>
    </div>
  )
}

export default SendOPTForm