import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Select from './Select'

const FilterDropDown = ({options , filterField}) => {
   const [searchParams , setSearchParams] = useSearchParams()
   const filterValue = searchParams.get(filterField) || "";
   function ChangeFilterHandler(e){
    searchParams.set(filterField , e.target.value)
    setSearchParams(searchParams)
   }
  return (
   <Select value={filterValue} onChange={ChangeFilterHandler} options={options}/>
  )
}

export default FilterDropDown