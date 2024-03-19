import React from 'react'

function Stat({color , icon , title , value}) {
  return (
    <div
        className={`${color} w-full grid grid-cols-12 items-center gap-x-2.5 md:gap-x-9 flex-grow md:flex-grow-0 h-32 p-2 rounded-2xl relative overflow-hidden`}
      >
        <div className="bg-white/30 col-span-3 flex-center h-14 lg:size-24 rounded-full child:size-10 lg:child:size-16 text-secondary-0 dark:text-white">
          {icon}
        </div>
        <div className="w-full col-span-9 flex flex-col gap-y-1.5 md:gap-y-8 text-white">
          <span className="font-MorabbaBold text-base lg:text-xl">{title} </span>
          <span className="font-DanaBold text-2xl">{value}</span>
        </div>
        <span className='absolute -left-16 bg-white/20 size-32 rounded-full'></span>
      </div>
  )
}

export default Stat