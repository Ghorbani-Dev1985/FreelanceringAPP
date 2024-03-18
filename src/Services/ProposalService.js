import Http from "./HttpService";

export function ChangeProposalStatusApi({id , data}){
    return Http.patch(`/proposal/${id}` , data).then(({data}) => data.data)
}