import React, { useState } from 'react'

const SendOPTForm = () => {
    const [phoneNumber , setPhoneNumber] = useState('')
  return (
    <div>
        <form className='w-full space-y-8'>
            <div >
                <label htmlFor='PhoneNumber' className='mb-1'>شماره موبایل</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id='PhoneNumber' placeholder='شماره موبایل' type='text' className='text-secondary-900 hover:border-primary-300 focus:border-primary-300 transition-colors focus:shadow-lg focus:shadow-primary-200' />
            </div>
            <button className='w-full my-4 bg-primary-900 hover:bg-primary-800 shadow-lg shadow-primary-300 text-white font-DanaBold py-2 rounded-lg transition-colors'>ارسال کد تایید</button>
        </form>
    </div>
  )
}

export default SendOPTForm