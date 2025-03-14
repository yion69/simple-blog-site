import { useSelectedBlog } from "../../context/BlogContext";
import { BlogProps } from "../../interfaces/BlogInterface";

export default function BlogSearch({ listNumber, data }:{ listNumber: number, data:BlogProps}) {
    
    const { setSelectedBlog } = useSelectedBlog();
    const handleBlogClick = () => {
        setSelectedBlog({
            title: data.title,
            body: data.body,
            userId: data.userId,
            id: data.id
        })
    }
    
    return (
        <div className="flex flex-col justify-center p-6 cursor-pointer hover:scale-95 transition-transform" onClick={handleBlogClick}>
            <span className="text-lg">{listNumber + 1}. {data.title}</span>
            <p className="text-sm text-zinc-700">{data.body}</p>
        </div>
    )
}