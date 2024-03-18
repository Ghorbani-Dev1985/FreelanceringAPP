import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutUser } from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";

export default function useLogout(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
   const {isPending , mutate: logout} = useMutation({
        mutationFn: LogoutUser,
        onSuccess: () => {
            queryClient.removeQueries()
            navigate('/' , {replace: true})
        }
    })
    return {isPending , logout}
}