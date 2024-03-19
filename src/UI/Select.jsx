import React from 'react'

const Select = ({value , onChange , options}) => {
  return (
    <select value={value} onChange={onChange} className='select py-2'>
      {
        options.map(({label , value}) => (
            <React.Fragment key={value}>
             <option className='dark:bg-gray-700' value={value}>{label}</option>
            </React.Fragment>
        ))
      }
    </select>
  )
}

export default Select