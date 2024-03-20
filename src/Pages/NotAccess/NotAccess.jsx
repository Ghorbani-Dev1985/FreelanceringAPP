import React from 'react'
import { Link } from 'react-router-dom'
import NotAccessImg from '../../Assets/Images/NotAccess/notAccess.png'

const NotAccess = () => {
  return (
    <section className='flex-center mt-14'>
    <div className='container sm:mt-0'>
      <div className='flex-center mb-10'><img src={NotAccessImg} className='w-full max-w-2xl' alt='ghorbani-dev.ir' /></div>
        <h3 className="font-DanaBold text-xl sm:text-3xl text-zinc-700 dark:text-white text-center sm:-mt-[60px]">متاسفانه به این بخش دسترسی نداری</h3>
        <div className='flex-center mt-5 sm:mt-10'>
        <Link to='/' className="flex-center button-md mb-8 rounded-2xl sm:button-lg btn-primary mx-auto hover:text-white">بازگشت به صفحه اصلی</Link>
        </div>
    </div>
    </section>
  )
}

export default NotAccess