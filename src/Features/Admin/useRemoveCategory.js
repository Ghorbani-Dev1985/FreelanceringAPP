import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RemoveCategoryApi } from "../../Services/CategoryService";



export default function useRemoveProject(){
   const queryClient = useQueryClient()
 const {mutate : removeCategory , isPending : isDeleting} = useMutation({
    mutationFn: RemoveCategoryApi,
    onSuccess: ({message}) => {
        toast.success(message)
        //Update Data
        queryClient.invalidateQueries({
            queryKey: ["categories"]
        })
    },
    onError: (error) => {
        toast.error(error?.response?.data?.message)
    }
  })
  return {removeCategory , isDeleting}
}