
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ChangeProposalStatusApi } from "../../Services/ProposalService";

export default function useChangeProposalStatus(){
   const {isPending: isUpdating , mutate: changeProposalStatus} = useMutation({
        mutationFn: ChangeProposalStatusApi,
        onSuccess: ({message}) => {
            toast.success(message)
    
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isUpdating , changeProposalStatus}
}