import React from 'react'
import TextField from './../../UI/TextField'
import { useForm } from 'react-hook-form'
import Loading from '../../UI/Loading'
import useEditCategory from './useEditCategory'
import useCreateCategory from './useCreateCategory'

const CreateNewCategory = ({OnCloseHandler , CategoryToEdit = {}}) => {
    
  const {value: editId} = CategoryToEdit;
  const isEditSession = Boolean(editId);
  const {label , value , desc , enTitle } = CategoryToEdit
  let editValues = {}
  if(isEditSession){
    editValues = {
        id: value,
        title: label,
        description: desc,
        englishTitle: enTitle,
    }
  }
  const {register , formState: {errors , isValid} , handleSubmit , reset} = useForm({defaultValues : editValues , mode: "all"})
  const {isCreating , createCategory} = useCreateCategory()
  const {isUpdating , editCategory} = useEditCategory()
  const AddNewCategoryHandler = (data) => {
    if(isEditSession){
        console.log(editId)
        editCategory({id: editId , data} , {onSuccess: () => {
        OnCloseHandler();
         reset();
        }})
    }else{
        createCategory(data , {onSuccess:() => {
        OnCloseHandler();
         reset();
        }})
    }
  }
  return (
    <form className='space-y-8' onSubmit={handleSubmit(AddNewCategoryHandler)}>
        <TextField label="عنوان دسته‌بندی‌" name="title" placeholder="لطفا عنوان دسته‌بندی‌ رو وارد کن " register={register} required validationSchema={
            {
                required: "عنوان دسته‌بندی‌ اجباریه",
                minLength:{
                    value: 3,
                    message: "حداقل ۳ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 30,
                    message: "حداکثر می تونی ۳۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
         <TextField label="توضیحات دسته‌بندی‌" name="description" placeholder="لطفا توضیحات دسته‌بندی‌ رو وارد کن " register={register} required validationSchema={
            {
                required: "توضیحات دسته‌بندی‌ اجباریه",
                minLength:{
                    value: 3,
                    message: "حداقل ۳ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 150,
                    message: "حداکثر می تونی ۱۵۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
        <TextField label="عنوان انگلیسی" name="englishTitle" placeholder="لطفا عنوان انگلیسی رو وارد کن " register={register} required validationSchema={
            {
                required: " عنوان انگلیسی اجباریه",
                minLength:{
                    value: 3,
                    message: "حداقل ۳ کاراکتر باید وارد بشه"
                },
                maxLength: {
                    value: 150,
                    message: "حداکثر می تونی ۱۵۰ کاراکتر وارد کنی"
                }
            }
        } errors={errors} />
        {
            isCreating || isUpdating ? <Loading /> :
        <button type='submit' disabled={!isValid} className='btn btn-primary w-full'>ثبت</button>
        }
    </form>
  )
}

export default CreateNewCategory