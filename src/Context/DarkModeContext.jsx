import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../Hooks/useLocalStorage";

const DarkModeContext = createContext()

export function DarkModeProvider({children}){
  // Check User device Theme
  const [isDarkMode , setIsDarkMode] = useLocalStorageState("IsDarkMode" , window.matchMedia("(prefers-color-scheme: dark)").matches) // true , false

  const ToggleDarkMode = () =>  setIsDarkMode((prev) => !prev)
  useEffect(() => {
   if(isDarkMode){
    document.documentElement.classList.add("dark-mode")
    document.documentElement.classList.remove("light-mode")
   }else{
    document.documentElement.classList.add("light-mode")
    document.documentElement.classList.remove("dark-mode")
   }
  },[isDarkMode])
  return( 
  <DarkModeContext.Provider value={{isDarkMode , ToggleDarkMode}}>
        {children}
  </DarkModeContext.Provider>
  )
}

export function useDarkMode(){
 const context = useContext(DarkModeContext)
 if(context === undefined) throw new Error("DarkModeContext was used outside of DarkModeProvider")
 return context
}