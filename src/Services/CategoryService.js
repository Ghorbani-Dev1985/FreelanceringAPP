import Http from "./HttpService";


export function GetCategoryApi(){
    return Http.get("/category/list").then(({data}) => data.data)
}