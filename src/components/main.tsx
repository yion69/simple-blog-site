import { useState } from "react";
import Blog from "./ui/blog";
import Button from "./ui/button";
import { BlogProps } from "../interfaces/BlogInterface";
import { useSelectedBlog } from "../context/BlogContext";
import { ChevronLeft } from "lucide-react";

export default function Main({ data }: { data: BlogProps[] }) {

    const [blogCount, setBlogCount] = useState<number>(10);
    const loadBlog = () => {
        if (data.length === blogCount) return;
        setBlogCount(prev => prev + 10);
    }

    const { selectedBlog, setSelectedBlog } = useSelectedBlog();

    return (
        <div className="flex flex-col w-full h-auto gap-4">
            { selectedBlog === null ? <BlogAll /> : <BlogDetailed /> }
        </div>
    )

    function BlogAll() {
        return (
            <>
                <div className="grid grid-cols-1 lg:grid-cols-2 row-auto gap-2">
                    {
                        data.slice(0, blogCount).map((item, index) => (
                            <Blog
                                key={index}
                                title={item.title}
                                body={item.body}
                                userId={item.userId}
                                id={item.id} />
                        ))
                    }
                </div>
                <div className="flex flex-col justify-center items-center w-full h-fit col-span-2">
                    {
                        blogCount !== data.length &&
                        <Button
                            text={"Load More"}
                            size={"full"}
                            color={"primary"}
                            onClick={loadBlog} />
                    }
                    <span className="py-4">Showing {blogCount} / {data.length}</span>
                </div>
            </>
        )
    }

    function BlogDetailed() {
        return (
            <div className="flex flex-col w-full h-[60dvh] p-4 lg:p-6 border-2 border-zinc-300 rounded-md bg-zinc-50">
                <button type="button" title="back" className="flex w-fit cursor-pointer" 
                    onClick={() => setSelectedBlog(null)}>
                    <ChevronLeft />
                    back
                </button>
                {
                    selectedBlog !== null && 
                        <div className="flex flex-col justify-evenly grow gap-4 p-4 lg:p-8">
                            <h1 className="text-xl lg:text-3xl">{ selectedBlog.title }</h1>
                            <p className="text-base lg:text-xl">{ selectedBlog.body }</p>
                            <div className="flex gap-4 text-sm lg:text-xl text-zinc-400">
                                <span>Blog ID: { selectedBlog.id }</span>
                                <span> | </span>
                                <span>User ID: { selectedBlog.userId }</span>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

