import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const DatePickerField = ({label , date , setDate}) => {
  return (
    <div>
        <label className='flex mb-1'>{label}</label>
        <DatePicker containerClassName='w-full' inputClass='textField-input dir-ltr' calendarPosition='bottom-center' value={date} onChange={(date) => setDate(date)} format='YYYY/MM/DD' calendar={persian} locale={persian_fa}/>
    </div>
  )
}

export default DatePickerField