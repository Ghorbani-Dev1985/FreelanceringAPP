import React, { useState } from 'react'
import TextField from '../../UI/TextField'

const CompleteProfileForm = () => {
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
  return (
    <section className='flex-center h-screen'>
    <div className='w-full sm:max-w-sm bg-white rounded-lg p-6'>  
        <div className='flex-center my-4'><h2 className='font-MorabbaBold text-2xl'>تکمیل اطلاعات کاربری</h2></div>   
        <form className='space-y-8'>
        <TextField label=" نام و نام خانوادگی" name="FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder=" نام و نام خانوادگی خود را وارد نمایید"/>
        <TextField label=" ایمیل" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} ltr placeholder=" ایمیل خود را وارد نمایید"/>
        <div className='flex-center gap-x-8'>
            <div className='flex-center gap-x-2 text-slate-600'>
                <input className='cursor-pointer size-4 form-radio text-primary-900 focus:ring-primary-900' type="radio" name="role" id="OWNER" value="OWNER" />
                <label htmlFor='OWNER'>کارفرما</label>
            </div>
            <div className='flex-center gap-x-2 text-slate-600'>
            <input className='cursor-pointer size-4 form-radio text-primary-900 focus:ring-emerald-500' type="radio" name="role" id="FREELANCER" value="FREELANCER" />
                <label htmlFor='FREELANCER'>فریلنسر</label>
            </div>
        </div>
        <button type='submit' className='btn btn-primary w-full'>ثبت اطلاعات</button>
        </form>
    </div>
    </section>
  )
}

export default CompleteProfileForm