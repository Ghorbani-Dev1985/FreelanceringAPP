import React, { useState } from 'react'
import TextField from './../../UI/TextField'
import { useForm } from 'react-hook-form'
import RHFSelect from '../../UI/RHFSelect'
import { TagsInput } from 'react-tag-input-component'
import DatePickerField from '../../UI/DatePickerField'
import useCategories from '../../Hooks/useCategories'
import useCreateProject from './useCreateProject'
import Loading from '../../UI/Loading'
import useEditProject from './useEditProject'

const CreateProjectForm = ({OnCloseHandler , ProjectToEdit = {}}) => {
    
  const {_id: editId} = ProjectToEdit;
  const isEditSession = Boolean(editId);
  const {title , description , budget , category , deadline , tags: prevTags} = ProjectToEdit
  let editValues = {}
  if(isEditSession){
    editValues = {
        title,
        description,
        budget,
        category: category._id
    }
  }
  const [tags , setTags] = useState(prevTags || []) 
  const [date , setDate] = useState(new Date(deadline) || "")
  const {register , formState: {errors , isValid} , handleSubmit , reset} = useForm({defaultValues : editValues , mode: "all"})
  const {categories} = useCategories()
  const {createProject , isCreating} = useCreateProject()
  const {editProject , isEditing} = useEditProject()
  const AddNewProjectHandler = (data) => {
    const newProject = {...data , deadline: new Date(date).toISOString() , tags}
    if(isEditSession){
        editProject({id: editId , newProject} , {onSuccess: () => {
        OnCloseHandler();
         reset();
        }})
    }else{
        createProject(newProject , {onSuccess:() => {
        OnCloseHandler();
         reset();
        }})
    }
  }
  return (
    <form className='space-y-8' onSubmit={handleSubmit(AddNewProjectHandler)}>
        <TextField label="عنوان پروژه" name="title" placeholder="لطفا عنوان پروژه رو وارد کن " register={register} required validationSchema={
            {
                required: "عنوان پروژه اجباریه",
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
         <TextField label="توضیحات پروژه" name="description" placeholder="لطفا توضیحات پروژه رو وارد کن " register={register} required validationSchema={
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
        <TextField label="بودجه پروژه" name="budget" placeholder="لطفا بودجه پروژه رو وارد کن " type='number' register={register} required validationSchema={
            {
                required: "بودجه پروژه اجباریه",
                min:{
                    value: 1_000_000,
                    message: "حداقل بودجه ۱,۰۰۰,۰۰۰ باید بشه"
                },
            }
        } errors={errors} />
        <RHFSelect label="دسته بندی" required name="category" register={register} options={categories} />
        <div>
            <label className='flex mb-1'>نام تگ</label>
        <TagsInput value={tags} onChange={setTags} name='tags'/>
        </div>
        <DatePickerField label="تاریخ ددلاین" date={date} setDate={setDate}/>
        {
            isCreating || isEditing ? <Loading /> :
        <button type='submit' disabled={!isValid} className='btn btn-primary w-full'>افزودن</button>
        }
    </form>
  )
}

export default CreateProjectForm