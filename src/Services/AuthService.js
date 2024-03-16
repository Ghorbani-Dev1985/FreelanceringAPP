import Http from "./HttpService";

export function GetOtp(data){
    return Http.post("/user/get-otp" , data).then(({data}) => data.data)
}

export function CheckOtp(data){
    return Http.post("/user/check-otp" , data).then(({data}) => data.data)
}

export function CompleteProfile(data){
    return Http.post("/user/complete-profile" , data).then(({data}) => data.data)
}

export function GetUser(){
    return Http.get("/user/profile").then(({data}) => data.data)
}