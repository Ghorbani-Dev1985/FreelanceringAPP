import { useMutation, useQueryClient } from "@tanstack/react-query";
import {CreateProposalApi} from '../../Services/ProposalService'
import toast from "react-hot-toast";

export default function useCreateProposal(){
    const queryClient = useQueryClient()
   const {isPending: isCreating , mutate: createProposal} = useMutation({
        mutationFn: CreateProposalApi,
        onSuccess: ({message}) => {
            toast.success(message)
            //Update Data
            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isCreating , createProposal}
}