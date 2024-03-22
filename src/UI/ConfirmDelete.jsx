import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { HiOutlineX } from 'react-icons/hi'
import useOutsideClick from '../Hooks/useOutsideClick'

const ConfirmDelete = ({open ,title ,OnCloseHandler ,OnConfirmHandler , resourceName , disabled}) => {
  const ref = useOutsideClick(OnCloseHandler)
  return (
 open && (
<div className="w-full h-screen bg-primary-300 bg-opacity-30 z-40 backdrop-blur-sm fixed top-0 left-0">
<div className="w-[calc(100vw-2rem)] md:max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
        <div className="rounded-lg">
    {/* Header */}
    <div className="flex-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="flex-center line-clamp-1 flex-1 text-xl font-MorabbaBold text-secondary-700 dark:text-white">
              {title}
            </h3>
            <button
              onClick={OnCloseHandler}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm size-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
            >
              <HiOutlineX className="size-6 text-rose-500" />
            </button>
            </div>
         
            <div className="p-4 md:p-5 text-center">
            <BiInfoCircle className="mx-auto mb-4 text-rose-400 size-14 dark:text-gray-200"/>
                <h3 className="mb-5 text-xl font-DanaBold text-secondary-800 dark:text-gray-400">آیا برای حذف {resourceName} مطمعن هستی؟</h3>
                <div className='flex-between gap-x-16'>
                <button onClick={OnCloseHandler} disabled={disabled} type="button" className="flex-1 btn btn-noconfirm">انصراف</button>
                <button onClick={OnConfirmHandler} disabled={disabled} type="button" className="flex-1 btn btn-danger">
                    بله، مطمعنم
                </button>
                </div>
            </div>

    </div>
</div>
</div>

)
  )
}

export default ConfirmDelete