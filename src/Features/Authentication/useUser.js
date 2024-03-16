import { useQuery } from "@tanstack/react-query";
import { GetUser } from "../../Services/AuthService";

export default function useUser(){
    return useQuery({
    queryKey: ["get-user"],
    queryFn: GetUser,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
}