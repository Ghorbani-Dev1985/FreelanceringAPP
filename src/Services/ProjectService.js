import Http from "./HttpService";

export function GetOwnerProjectsApi(){
    return Http.get("/project/owner-projects").then(({data}) => data.data)
}

export function RemoveProjectsApi(id){
    return Http.delete(`/project/${id}`).then(({data}) => data.data)
}

export function CreateProjectApi(data){
    return Http.post('/project/add' , data).then(({data}) => data.data)
}

export function EditProjectApi({id , newProject}){
    return Http.patch(`/project/update/${id}` , newProject).then(({data}) => data.data)
}

export function ToggleProjectStatusApi({id , data}){
    return Http.patch(`/project/${id}` , data).then(({data}) => data.data)
}

export function GetProjectApi(id){
    return Http.get(`/project/${id}`).then(({data}) => data.data)
}

export function GetAllProjectsApi(qs){
    return Http.get(`/project/list${qs}`).then(({data}) => data.data)
}