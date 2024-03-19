import { useQuery } from "@tanstack/react-query";
import { GetAllProjectsApi } from "../Services/ProjectService";


export default function useAllProjects(){
const { data , isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: GetAllProjectsApi,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const { projects } = data || {}
    return { isLoading , projects }
}