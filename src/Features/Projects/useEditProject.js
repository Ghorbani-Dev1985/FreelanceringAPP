import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditProjectApi } from "../../Services/ProjectService";
import toast from "react-hot-toast";

export default function useEditProject(){
    const queryClient = useQueryClient()
   const {isPending: isEditing , mutate: editProject} = useMutation({
        mutationFn: EditProjectApi,
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
    return {isEditing , editProject}
}