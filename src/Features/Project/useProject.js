import { useQuery } from "@tanstack/react-query";
import { GetProjectApi } from "../../Services/ProjectService";
import { useParams } from "react-router-dom";

export default function useProject(){
    const {id} = useParams()
    const { data , isLoading } = useQuery({
    queryKey: ["project" , id],
    queryFn: () => GetProjectApi(id),
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    })
    const { project } = data || {}
    return { isLoading , project }
}