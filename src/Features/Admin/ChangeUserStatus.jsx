import React from 'react'
import RHFSelect from '../../UI/RHFSelect'
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Loading from '../../UI/Loading'
import { ChangeUserStatusApi } from '../../Services/AuthService'
import useChangeUserStatus from './useChangeUserStatus'

const options =[
    {
        label: "رد شده",
        value: 0,
    },
    {
        label: "در انتظار تایید",
        value: 1,
    },
    {
        label: "تایید شده",
        value: 2,
    }
]

const ChangeUserStatus = ({userId , OnCloseHandler}) => {
    const {register , handleSubmit} = useForm()
    const {isUpdating , changeUserStatus} = useChangeUserStatus()
    const queryClient = useQueryClient()
    const ChangeStatusHandler = (data) => {
        changeUserStatus({userId , data} , 
            {
                onSuccess: () => {
                    OnCloseHandler()
                    queryClient.invalidateQueries({queryKey: ["users"]})
                }
            })
    }
  return (
    <form onSubmit={handleSubmit(ChangeStatusHandler)}>
    <RHFSelect name="status" label="تغییر وضعیت" register={register} required options={options}/>
    {
        isUpdating ? <Loading /> :
    <button type='submit' className='btn btn-primary w-full'>تایید</button>
    }
    </form>
  )
}

export default ChangeUserStatus