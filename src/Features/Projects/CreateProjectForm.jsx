import React from 'react'
import TextField from './../../UI/TextField'
import { useForm } from 'react-hook-form'

const CreateProjectForm = () => {
  const {register , formState: {errors} , handleSubmit} = useForm()
  const AddNewProjectHandler = (data) => {
    console.log(data)
  }
  return (
    <form className='space-y-8' onSubmit={handleSubmit(AddNewProjectHandler)}>
        <TextField label="عنوان پروژه" name="title" placeholder="لطفا عنوان پروژه رو وارد کن " register={register} requiredd validationSchema={
            {
                required: "عنوان پروژه اجباریه",
                minLength:{
                    value: 10,
                    message: "حداقل ۱۰ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 80,
                    message: "حداکثر می تونی ۸۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
         <TextField label="توضیحات پروژه" name="description" placeholder="لطفا توضیحات پروژه رو وارد کن " register={register} requiredd validationSchema={
            {
                required: "توضیحات پروژه اجباریه",
                minLength:{
                    value: 10,
                    message: "حداقل ۱۰ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 150,
                    message: "حداکثر می تونی ۱۵۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
        <TextField label="بودجه پروژه" name="budget" placeholder="لطفا بودجه پروژه رو وارد کن " type='number' register={register} requiredd validationSchema={
            {
                required: "بودجه پروژه اجباریه",
                min:{
                    value: 1_000_000,
                    message: "حداقل بودجه ۱,۰۰۰,۰۰۰ باید بشه"
                },
            }
        } errors={errors} />
        <button type='submit' className='btn btn-primary w-full'>افزودن</button>
    </form>
  )
}

export default CreateProjectForm