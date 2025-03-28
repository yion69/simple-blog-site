import { useSelectedBlog } from "../../context/BlogContext";
import { BlogProps } from "../../interfaces/BlogInterface";

export default function Blog({ title, body, userId, id }: BlogProps) {
    
    const { setSelectedBlog } = useSelectedBlog();
    const handleBlogClick = () => {
        setSelectedBlog({
            title: title,
            body: body,
            userId: userId,
            id: id
        })
    }
    
    return (
        <div className="flex flex-col w-full h-60 max-h-72 px-4 lg:px-6 pt-4 pb-2 rounded-sm bg-zinc-50 border-2 border-zinc-300 hover:border-zinc-400 transition-colors duration-100 cursor-pointer" onClick={handleBlogClick}>
            <h2 className="h-fit lg:h-2/6 text-lg md:text-3xl lg:text-2xl line-clamp-2"> { title } </h2>
            <p className="h-fit my-auto text-sm md:text-lg lg:text-base line-clamp-5 lg:line-clamp-4 text-zinc-700"> 
                { body }    
            </p>
            <div className="h-1/6 gap-2 flex items-center justify-end text-xs text-zinc-400">
                <h3>User ID: { userId }</h3>
                <span> | </span>
                <h3>Blog ID: { id }</h3>
            </div>
        </div>
    )
}