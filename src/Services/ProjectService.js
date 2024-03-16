import Http from "./HttpService";

export function GetOwnerProjectsApi(){
    return Http.get("/project/owner-projects").then(({data}) => data.data)
}

export function RemoveProjectsApi(id){
    return Http.delete(`/project/${id}`).then(({data}) => data.data)
}