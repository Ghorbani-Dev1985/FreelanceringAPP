import React from 'react'

function Stat({color , icon , title , value}) {
  return (
    <div
        className={`${color} w-full flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 h-32 p-2 rounded-2xl`}
      >
        <div className="bg-white/30 flex-center w-14 h-14 lg:size-24 rounded-full child:size-10 lg:child:size-16 text-secondary-0 dark:text-white">
          {icon}
        </div>
        <div className="flex flex-col gap-y-1.5 md:gap-y-8 text-white">
          <span className="font-MorabbaBold text-base lg:text-xl xl:text-3xl">{title} </span>
          <span className="font-DanaBold text-3xl">{value}</span>
        </div>
      </div>
  )
}

export default Stat