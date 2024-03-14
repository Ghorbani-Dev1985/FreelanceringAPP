import { Cancel } from '@mui/icons-material'
import React from 'react'
import Modal from '@mui/material/Modal';

const DetailModal = ({children , title , open , setOpen}) => {
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="absolute top-1/2 left-1/2 outline-none bg-gray-800 rounded-lg -translate-x-1/2 -translate-y-1/2 w-96 border border-gray-600 shadow-ring">
        <div className='flex-center border-b border-slate-600 p-2'>
              <p className='flex flex-1 justify-center font-DanaBold text-xl'>{title}</p>
              <button onClick={() => setOpen(false)}>
              <Cancel className='text-red-500'/>
              </button>
        </div>
        <div className='p-5'>
     {children}
        </div>
    </div>
  </Modal>
  )
}

export default DetailModal