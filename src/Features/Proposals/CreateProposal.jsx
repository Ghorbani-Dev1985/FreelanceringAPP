import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../UI/TextField'
import Loading from '../../UI/Loading'
import useCreateProposal from './useCreateProposal'


const CreateProposal = ({OnCloseHandler , projectID}) => {
    const {handleSubmit, register , formState , errors} = useForm()
   const {isCreating , createProposal} = useCreateProposal()
    const AddNewProposalHandler = (data) => {
        console.log(data)
        // const newProposal = {...data , projectID}
        // createProposal(newProposal , {onSuccess:() => {
        //     OnCloseHandler();
        //      reset();
        //     }})
    }
  return (
    <>
     <form className='space-y-8' onSubmit={handleSubmit(AddNewProposalHandler)}>
        <TextField label=" توضیحات" name="description" placeholder="لطفا توضیحات رو وارد کن " register={register} required validationSchema={
            {
                required: "توضیحات  اجباریه",
                minLength:{
                    value: 10,
                    message: "حداقل ۱۰ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 30,
                    message: "حداکثر می تونی ۳۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
        <TextField label="بودجه " name="price" placeholder="لطفا بودجه رو وارد کن " type='number' register={register} required validationSchema={
            {
                required: "بودجه اجباریه",
                min:{
                    value: 1_000_000,
                    message: "حداقل بودجه ۱,۰۰۰,۰۰۰ باید بشه"
                },
            }
        } errors={errors} />
          <TextField label=" مدت زمان" name="duration" placeholder="لطفا مدت زمان رو وارد کن " type='number' register={register} required validationSchema={
            {
                required: "مدت زمان اجباریه",
            }
        } errors={errors} />
        {
            isCreating ? <Loading /> :
        <button type='submit' className='btn btn-primary w-full'>افزودن</button>
        }
    </form>
    </>
  )
}

export default CreateProposal