import { useQuery } from "@tanstack/react-query";
import { GetProposalsApi } from "../../Services/ProposalService";

export default function useProposals(){
    const {data , isLoading} = useQuery({
        queryKey: ["proposals"],
        queryFn: GetProposalsApi,
    })
    const {proposals} = data || {};
    return {isLoading , proposals}
}