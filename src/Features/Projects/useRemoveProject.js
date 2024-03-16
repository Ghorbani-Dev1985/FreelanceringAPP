import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveProjectsApi } from "../../Services/ProjectService";
import toast from "react-hot-toast";



export default function useRemoveProject(){
   const queryClient = useQueryClient()
 const {mutate : removeProject , isPending : isDeleting} = useMutation({
    mutationFn: RemoveProjectsApi,
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
  return {removeProject , isDeleting}
}