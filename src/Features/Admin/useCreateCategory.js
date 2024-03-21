import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateCategoryApi } from "../../Services/CategoryService";

export default function useCreateCategory(){
    const queryClient = useQueryClient()
   const {isPending: isCreating , mutate: createCategory} = useMutation({
        mutationFn: CreateCategoryApi,
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
    return {isCreating , createCategory}
}