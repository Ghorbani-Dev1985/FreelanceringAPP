

import React, { useEffect, useState } from 'react'

const useLocalStorage = (itemName , initialState) => {
    const [value , setValue] = useState(() => JSON.parse(localStorage.getItem(itemName)) || initialState)
    useEffect(()=> {
        localStorage.setItem(itemName , JSON.stringify(value))
       }, [value])
    return [value , setValue]
}

export default useLocalStorage
