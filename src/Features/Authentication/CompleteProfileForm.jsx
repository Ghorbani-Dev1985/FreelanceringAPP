import React, { useState } from 'react'
import TextField from '../../UI/TextField'
import RadioInput from '../../UI/RadioInput'

const CompleteProfileForm = () => {
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
    const [role , setRole] = useState("")
    const CompleteProfileHandler = async (event) => {
      event.preventDefault()
    }
  return (
    <section className='flex-center h-screen'>
    <div className='w-full sm:max-w-sm bg-white rounded-lg p-6'>  
        <div className='flex-center my-4'><h2 className='font-MorabbaBold text-2xl'>تکمیل اطلاعات کاربری</h2></div>   
        <form onSubmit={CompleteProfileHandler} className='space-y-8'>
        <TextField label=" نام و نام خانوادگی" name="FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder=" نام و نام خانوادگی خود را وارد نمایید"/>
        <TextField label=" ایمیل" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} ltr placeholder=" ایمیل خود را وارد نمایید"/>
        <div className='flex-center gap-x-8'>   
                <RadioInput label="کارفرما" name="role" value="OWNER" onChange={(e) => setRole(e.target.value)} checked={role === "OWNER"}/>
                <RadioInput label="فریلنسر" name="role" value="FREELANCER" onChange={(e) => setRole(e.target.value)} checked={role === "FREELANCER"}/>
        </div>
        <button type='submit' className='btn btn-primary w-full'>ثبت اطلاعات</button>
        </form>
    </div>
    </section>
  )
}

export default CompleteProfileForm