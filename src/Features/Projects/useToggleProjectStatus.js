import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToggleProjectStatusApi } from "../../Services/ProjectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus(){
    const queryClient = useQueryClient()
   const {isPending: isUpdating , mutate: toggleProjectStatus} = useMutation({
        mutationFn: ToggleProjectStatusApi,
        onSuccess: ({message}) => {
            toast.success(message)
            //Update Data
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isUpdating , toggleProjectStatus}
}