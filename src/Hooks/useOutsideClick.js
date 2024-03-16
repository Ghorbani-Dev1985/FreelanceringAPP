import { useEffect, useRef } from "react"

export default function useOutsideClick(handler , listenCapturing = true){
    const ref = useRef()
    useEffect(() => {
        function handleClick(event){
            if(ref.current && !ref.current.contains(event.target)){
                handler()
            }
        }
     document.addEventListener("click" , handleClick , listenCapturing)
     return () => document.removeEventListener("click" , handleClick , listenCapturing)
    },[handler , listenCapturing])
    return ref;
}