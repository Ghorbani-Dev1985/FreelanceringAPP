import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProjectApi } from "../../Services/ProjectService";
import toast from "react-hot-toast";

export default function useCreateProject(){
    const queryClient = useQueryClient()
   const {isPending: isCreating , mutate: createProject} = useMutation({
        mutationFn: CreateProjectApi,
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
    return {isCreating , createProject}
}