import Http from "./HttpService";

export function GetOwnerProjectsApi(){
    return Http.get("/project/owner-projects").then(({data}) => data.data)
}