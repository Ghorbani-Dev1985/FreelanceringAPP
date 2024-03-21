import React, { useState } from 'react'
import { HiMiniPlusCircle } from "react-icons/hi2";
import Modal from '../../UI/Modal';
import ComponentTitle from '../../UI/ComponentTitle';
import CreateNewCategory from './CreateNewCategory';

const CategoryHeader = () => {
    const [isNewCategoryFormOpen , setIsNewCategoryFormOpen] = useState(false)
  return (
    <>
       <div className='flex-between'>
       <ComponentTitle title="لیست دسته‌بندی‌ها" />
         <button onClick={() => setIsNewCategoryFormOpen((prev) => !prev)} className='btn btn-primary flex items-center gap-x-1'>
          <HiMiniPlusCircle className="size-5"/><span>افزودن دسته‌بندی‌ جدید</span></button>
      </div>
      {/* New Project Modal */}
      <Modal open={isNewCategoryFormOpen} title="افزودن دسته‌بندی‌ جدید" OnCloseHandler={() => setIsNewCategoryFormOpen((prev) => !prev)}>
                        <CreateNewCategory OnCloseHandler={() => setIsNewCategoryFormOpen((prev) => !prev)} />
                    </Modal>
    </>
  )
}

export default CategoryHeader