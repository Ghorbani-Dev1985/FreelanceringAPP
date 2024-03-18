import { useQuery } from "@tanstack/react-query";
import { GetUser } from "../../Services/AuthService";

export default function useUser(){
    const {data , isLoading} = useQuery({
    queryKey: ["user"],
    queryFn: GetUser,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const {user} = data || {}
    return {isLoading , user}
}