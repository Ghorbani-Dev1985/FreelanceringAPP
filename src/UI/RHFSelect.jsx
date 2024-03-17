import React from 'react'

const RHFSelect = ({label , name , register , options , required}) => {
  return (
    <div>
       <label htmlFor={name} className='block mb-1'>{label} {required && <span className='text-rose-500'>*</span>}</label>
       <select id={name} {...register(name)} className='select'>
            {
                options.map(({label , value}) => (
                    <React.Fragment key={value}>
                       <option value={value}>{label}</option>
                    </React.Fragment>
                ))
            }
       </select>
    </div>
  )
}

export default RHFSelect