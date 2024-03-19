import Http from "./HttpService";

export function ChangeProposalStatusApi({proposalId , ...rest}){
    return Http.patch(`/proposal/${proposalId}` , rest).then(({data}) => data.data)
}

export function GetProposalsApi(){
    return Http.get(`/proposal/list`).then(({data}) => data.data)
}

export function CreateProposalApi(data){
    return Http.post('/proposal/add' , data).then(({data}) => data.data)
}