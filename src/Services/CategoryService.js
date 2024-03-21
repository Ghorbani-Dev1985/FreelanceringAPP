import Http from "./HttpService";


export function GetCategoryApi(){
    return Http.get("/category/list").then(({data}) => data.data)
}

export function CreateCategoryApi(data){
    return Http.post('/admin/category/add' , data).then(({data}) => data.data)
}

export function EditCategoryApi({id , data}){
    return Http.patch(`/admin/category/update/${id}` , data).then(({data}) => data.data)
}

export function RemoveCategoryApi(id){
    return Http.delete(`/admin/category/remove/${id}`).then(({data}) => data.data)
}