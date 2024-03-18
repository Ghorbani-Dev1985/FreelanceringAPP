import React from 'react'
import RHFSelect from '../../UI/RHFSelect'
import { useForm } from 'react-hook-form'
import useChangeProposalStatus from './useChangeProposalStatus'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Loading from '../../UI/Loading'

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

const ChangeProposalStatus = ({proposalID , OnCloseHandler}) => {
    const {id : projectID} = useParams()
    const {register , handleSubmit} = useForm()
    const {isUpdating , changeProposalStatus} = useChangeProposalStatus()
    const queryClient = useQueryClient()
    console.log(projectID)
    const ChangeStatusHandler = (data) => {
        changeProposalStatus({projectID , id: proposalID , data} , 
            {
                onSuccess: () => {
                    OnCloseHandler()
                    queryClient.invalidateQueries({queryKey: ["project", projectID]})
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

export default ChangeProposalStatus