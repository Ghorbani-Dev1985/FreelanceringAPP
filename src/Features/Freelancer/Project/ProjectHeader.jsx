import React from 'react'
import ComponentTitle from '../../../UI/ComponentTitle'
import FilterDropDown from '../../../UI/FilterDropDown'
import useCategories from '../../../Hooks/useCategories'
import Filter from '../../../UI/Filter'

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
]

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const ProjectHeader = () => {
  const {transformedCategories} = useCategories()
  console.log(transformedCategories)
  return (
    <div className='flex-between mb-4'>
        <ComponentTitle title="لیست پروژه‌ها" />
        <div className='flex-center gap-x-2'>
        <Filter filterField="status" options={statusOptions}/>
          <FilterDropDown filterField="sort" options={sortOptions}/>
            <FilterDropDown filterField="category" options={[{value: "ALL" , label: "دسته‌بندی(همه)"} , ...transformedCategories]}/>
        </div>
    </div>
  )
}

export default ProjectHeader