
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { EditCategoryApi } from "../../Services/CategoryService";

export default function useEditCategory(){
    const queryClient = useQueryClient()
   const {isPending: isUpdating , mutate: editCategory} = useMutation({
        mutationFn: EditCategoryApi,
        onSuccess: ({message}) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isUpdating , editCategory}
}