import { useQuery } from "@tanstack/react-query";
import { GetAllProjectsApi } from "../Services/ProjectService";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

export default function useAllProjects(){
   const {search} = useLocation()
   const queryObject = queryString.parse(search)
const { data , isLoading } = useQuery({
    queryKey: ["projects" , queryObject],
    queryFn: () => GetAllProjectsApi(search),
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const { projects } = data || {}
    return { isLoading , projects }
}