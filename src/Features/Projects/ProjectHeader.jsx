import React, { useState } from 'react'
import CreateProjectForm from './CreateProjectForm'
import { HiMiniPlusCircle } from "react-icons/hi2";
import Modal from '../../UI/Modal';

const ProjectHeader = () => {
    const [isNewProjectFormOpen , setIsNewProjectFormOpen] = useState(false)
  return (
    <>
       <div className='flex-between'>
         <h2 className='font-MorabbaBold text-2xl'>پروژه های شما</h2>
         <button onClick={() => setIsNewProjectFormOpen((prev) => !prev)} className='btn btn-primary flex items-center gap-x-1'><HiMiniPlusCircle className="size-5"/><span>افزودن پروژه جدید</span></button>
      </div>
      {/* New Project Modal */}
      <Modal open={isNewProjectFormOpen} title="افزودن پروژه جدید" OnCloseHandler={() => setIsNewProjectFormOpen((prev) => !prev)}>
                        <CreateProjectForm />
                    </Modal>
    </>
  )
}

export default ProjectHeader