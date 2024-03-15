import React from 'react'

const TextField = ({label , name , value , onChange , placeholder , ltr}) => {
  return (
    <div>
                <label htmlFor={name} className='block mb-1'>{label}</label>
                <input value={value} onChange={onChange} id={name} name={name} autoComplete='off' placeholder={placeholder} type='text' className={`${ltr && "dir-ltr placeholder:text-right"} textField-input`} />
            </div>
  )
}

export default TextField