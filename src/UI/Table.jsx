import React from 'react'

const Table = ({children}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        {children}
    </table>
    </div>
  )
}

export default Table

function TableHeader({children}){
    return(
        <thead className="font-DanaBold text-gray-700 uppercase bg-secondary-100 dark:text-gray-400">
            <tr>{children}</tr>
        </thead>
    )
}

function TableBody({children}){
    return(
        <tbody>

           {children}
        </tbody>
    )
}

function TableRow({children}){
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-6 py-4">
          {children}
        </tr>
    )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow