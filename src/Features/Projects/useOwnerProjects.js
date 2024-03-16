import { useQuery } from "@tanstack/react-query";
import { GetOwnerProjectsApi } from "../../Services/ProjectService";

export default function useOwnerProjects(){
const { data , isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: GetOwnerProjectsApi,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const { projects } = data || {}
    return { isLoading , projects }
}