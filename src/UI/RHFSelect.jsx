import React from 'react'

const RHFSelect = ({label , name , register , options , required}) => {
  return (
    <div>
       <label htmlFor={name} className='flex mb-1'>{label} {required && <span className='text-rose-500'>*</span>}</label>
       <select defaultValue="-1" id={name} {...register(name)} className='select'>
          <option value="-1" disabled>یکی از موارد رو انتخاب کن</option>
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