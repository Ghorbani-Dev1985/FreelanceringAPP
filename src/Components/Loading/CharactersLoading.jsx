import React from 'react'

const CharactersLoading = ({listsToRender}) => {
  return (
    
      <div role="status" className="grid grid-cols-2 border border-gray-700 rounded shadow animate-pulse dark:divide-gray-700dark:border-gray-700">
    {
        Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          <React.Fragment key={index}>
            <div className="flex-between gap-1 p-4 md:border md:border-gray-600 h-30">
            <div className="size-3 md:size-10 bg-gray-300 rounded-full dark:bg-gray-600 mb-4"></div>
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-20 mb-4"></div>
            <div className="w-20 md:w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-5 md:w-12"></div>
    </div>
            </React.Fragment>
          ))
        }
        </div>
     
  )
}

export default CharactersLoading