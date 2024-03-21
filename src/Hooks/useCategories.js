import { useQuery } from "@tanstack/react-query";
import { GetCategoryApi } from "../Services/CategoryService";

export default function useCategories(){
   const {data , isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: GetCategoryApi,
    })
    const {categories : rawCategories = []} = data || {};
    const categories = rawCategories.map((item) => ({
        label: item.title,
        value: item._id,
        desc: item.description,
        enTitle: item.englishTitle,
    }))
    const transformedCategories = rawCategories.map((item) => ({
        label: item.title,
        value: item.englishTitle,
    }))
    return {isLoading , categories , transformedCategories}
}