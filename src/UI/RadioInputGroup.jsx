import React from 'react'
import RadioInput from './RadioInput';

const RadioInputGroup = ({ register, watch, errors, configs }) => {
    const { name, validationSchema = {}, options } = configs;
    console.log(options)
  return (
    <>
    <div className='flex-center flex-wrap gap-x-8'>
      {
        options.map(({value , label}) => (
            <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />  
        ))
      }
    </div>
    <div className='flex-center'>
    {errors && errors[name] && (
        <span className="block text-rose-500 text-base">
          {errors[name]?.message}
        </span>
      )}
    </div>
    </>
  )
}

export default RadioInputGroup