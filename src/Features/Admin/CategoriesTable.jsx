import React from 'react'
import Table from '../../UI/Table'
import Loading from '../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import CategoriesRow from './CategoriesRow'
import useCategories from '../../Hooks/useCategories'


const CategoryTable = () => {
     const {isLoading , categories} = useCategories()
    if(isLoading) return <Loading />
    if(!categories.length) return <EmptyAlert text="کاربری یافت نشد" />
  return (
    <>
        <Table>
        <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                   عنوان
                </th>
                <th scope="col" className="px-6 py-4.5">
                   عنوان انگلیسی
                </th>
                <th scope="col" className="px-6 py-4.5">
                   توضیحات
                </th>
                <th scope="col" className="px-1.5 py-4.5">
                     عملیات
                </th>
        </Table.Header>
        <Table.Body>
            {
                categories.map((category , index) => {
                    return( 
                      <React.Fragment key={index}>
                        <CategoriesRow category={category} index={index} />
                      </React.Fragment>               
                    )
                })
            }
        </Table.Body>
       </Table>
    </>
  )
}

export default CategoryTable