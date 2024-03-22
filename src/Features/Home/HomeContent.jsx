import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import HomeBanner from '../../Assets/Images/Home/homeBanner.png'
const HomeContent = () => {
  return (
    <search className='flex flex-col md:flex-between md:flex-row gap-x-8 my-36'>
        <div className='flex flex-1'>
            <div className='flex flex-col'>
        <h2 className="font-MorabbaBold text-5xl block mb-8 mb:mb-0 h-48 lg:text-6xl text-primary-900 dark:text-white leading-[80px] lg:leading-[96px]">
            <Typewriter
              options={{
                strings: `اینجا می تونی <br className="hidden sm:inline" />  پروژه بگیری!`,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-secondary-700 dark:text-white text-center text-xl mb-8 lg:text-2xl mt-5 sm:mt-6 lg:mt-7 max-w-[500px]">
           خیلی از کارفرما ها تو این اپ پروژه شونو تعریف می کنن و
           می تونی بر اساس تخصص خودت و شرایط مربوطه بهشون درخواست همکاری بفرستی
          </p>
        
            <Link
              to="/freelancer/dashboard"
              className="flex-center btn btn-primary rounded-full"
            >
              از اینجا شروع کن
            </Link>
            </div>
            
        </div>

        <div className='flex flex-1'>
         <img src={HomeBanner} alt='ghorbani-dev.ir' />
        </div>
    </search>
  )
}

export default HomeContent