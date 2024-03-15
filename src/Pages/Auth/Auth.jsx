import React from 'react'
import SendOPTForm from '../../Features/Authentication/SendOPTForm'
import CheckOTPForm from '../../Features/Authentication/CheckOTPForm'

const Auth = () => {
  return (
      <section className='flex-center h-screen'>
    <div className='w-full max-w-sm border p-6 rounded-lg'>
      <SendOPTForm />
      {/* <CheckOTPForm /> */}
    </div>
      </section>
  )
}

export default Auth