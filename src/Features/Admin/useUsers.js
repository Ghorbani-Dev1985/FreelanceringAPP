import { useQuery } from "@tanstack/react-query";
import { GetAllUsersApi } from "../../Services/AuthService";

export default function useAllUsers(){
const { data , isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: GetAllUsersApi,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const { users } = data || {}
    return { isLoading , users }
}