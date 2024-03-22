import React from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'

const HomeLayout = () => {
  return (
    <section className='container'>
      <HomeHeader />
      <HomeContent />
    </section>
  )
}

export default HomeLayout
