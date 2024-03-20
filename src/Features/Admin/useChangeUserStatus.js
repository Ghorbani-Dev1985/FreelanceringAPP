
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ChangeUserStatusApi } from "../../Services/AuthService";

export default function useChangeUserStatus(){
   const {isPending: isUpdating , mutate: changeUserStatus} = useMutation({
        mutationFn: ChangeUserStatusApi,
        onSuccess: ({message}) => {
            toast.success(message)
    
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isUpdating , changeUserStatus}
}