import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = ({filterField , options}) => {
    const [searchParams , setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options.at(0).value;
    function ChangeFilterHandler(value){
     searchParams.set(filterField , value)
     setSearchParams(searchParams)
    }
  return (
    <div className='flex-center gap-x-2 text-sm'>
        <span>وضعیت</span>
        <div className='flex-center gap-x-1 bg-secondary-100 border border-gray-100 dark:border-gray-500 px-1 py-1 rounded-lg'>
        {
            options.map(({label , value}) =>
                {
                    const isActive = value === currentFilter
                    return (
                         <React.Fragment key={value}>
                 <button disabled={isActive} onClick={() => ChangeFilterHandler(value)} className={`whitespace-nowrap rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-transparent border border-gray-100 px-4 py-1.5 font-DanaBold transition-colors ${isActive ? "bg-primary-900 text-white hover:bg-primary-800" : "bg-secondary-0 text-secondary-800"}`}>{label}</button>
                </React.Fragment>
                    )
                }
               
            )
        }
        </div>
    </div>
  )
}

export default Filter