import React from 'react'
import ComponentTitle from '../../../UI/ComponentTitle'
import FilterDropDown from '../../../UI/FilterDropDown'
import useCategories from '../../../Hooks/useCategories'

const ProjectHeader = () => {
  const {transformedCategories} = useCategories()
  console.log(transformedCategories)
  return (
    <div className='flex-between'>
        <ComponentTitle title="لیست پروژه‌ها" />
        <div>
            <FilterDropDown filterField="category" options={[{value: "ALL" , label: "دسته‌بندی(همه)"} , ...transformedCategories]}/>
        </div>
    </div>
  )
}

export default ProjectHeader