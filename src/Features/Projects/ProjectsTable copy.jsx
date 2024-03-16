import React from 'react'
import useOwnerProjects from './useOwnerProjects'
import Loading from './../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import TruncateText from '../../Utils/TruncateText'
import ToLocalDateStringShort from '../../Services/ToLocalDateStringShort'
import { ToPersianNumbersWithComma } from '../../Services/ToPersianNumbersWithComma'

const ProjectsTable = () => {
    const {isLoading , projects} = useOwnerProjects()
    if(isLoading) return <Loading />
    if(projects.length) return <EmptyAlert text="تا حالا پروژه ای ثبت نشده" />
  return (
    <div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="font-DanaBold text-gray-700 uppercase bg-secondary-0 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-3">
                    عنوان 
                </th>
                <th scope="col" className="px-6 py-3">
                    دسته بندی
                </th>
                <th scope="col" className="px-6 py-3">
                    بودجه
                </th>
                <th scope="col" className="px-6 py-3">
                    ددلاین               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ددلاین               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تگ ها               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    فریلنسر               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    وضعیت               
                  </th>
                <th scope="col" className="px-6 py-3">
                عملیات
                </th>
            </tr>
        </thead>
        <tbody>
            {
                projects.map(({_id , title , category , budget , deadline , tags , freelancer , status} , index) => {
                    return(
                        <React.Fragment key={_id}>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {TruncateText(title , 30)}
                </td>
                <td className="px-6 py-4">
                    {category.name}
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(budget)}
                </td>
                <td className="px-6 py-4 text-right">
                   {ToLocalDateStringShort(deadline)}
                </td>
                <td className="px-6 py-4 text-right">
                <div className='flex flex-wrap items-center gap-2 max-w-[200px'>
                   {tags.map((tag) => (<span className='badge badge-secondary' key={teg}>{tag}</span>))}
                </div>
                </td>
                <td className="px-6 py-4 text-right">
                   {freelancer?.name || "-"}
                </td>
                <td className="px-6 py-4 text-right">
                   {
                    status === "open" ? <span className='badge badge-primary'>باز</span> : <span className='badge badge-close'>بسته</span>
                   }
                </td>
            </tr>
                        </React.Fragment>
                    )
                })
            }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProjectsTable