import React from 'react'

const RadioInput = ({label , name , value , onChange , checked}) => {
  return (
    <div className='flex-center gap-x-2 text-slate-600'>
    <input className='cursor-pointer size-4 form-radio text-primary-900 focus:ring-primary-900' type="radio" name={name} id={value} value={value} checked={checked} onChange={onChange}/>
                <label htmlFor={value}>{label}</label>
    </div>
  )
}

export default RadioInput