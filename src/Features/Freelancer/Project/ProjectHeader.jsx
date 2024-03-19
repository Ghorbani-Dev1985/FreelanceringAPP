import React from 'react'
import ComponentTitle from '../../../UI/ComponentTitle'

const ProjectHeader = () => {
  return (
    <div className='flex-between'>
        <ComponentTitle title="لیست پروژه‌ها" />
        <div>
            فیلتر
        </div>
    </div>
  )
}

export default ProjectHeader