import React, { useState } from "react"
import { BlogProps } from "../interfaces/BlogInterface";
import BlogSearch from "./ui/blog-search";
import { useSelectedBlog } from "../context/BlogContext";

export default function Banner({ data }:{ data: BlogProps[] }) {

    const [query, setQuery] = useState("");
    const handleQueryChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        console.log(filteredBlogs());
    }
    const filteredBlogs = () => {
        return data.filter(item => {
            return item.title.toLowerCase().includes(query.toLowerCase());
        })
    }
    const filtered = filteredBlogs();
    const { selectedBlog } = useSelectedBlog();

    return (
        <div className="relative flex w-full h-fit">
            <div className="flex items-center justify-end w-full h-fit">
                <input type="text" title="search-bar" className="w-full h-12 px-4 lg:px-6 py-2 rounded-md border-2 border-zinc-300 bg-zinc-50 outline-0 focus:border-zinc-400" onChange={handleQueryChange} placeholder="Search..." />
            </div>
            {
                query.length !== 0 && selectedBlog === null &&
                    <div className="absolute flex flex-col top-11 h-fit w-full gap-1 bg-zinc-100 border-2 border-zinc-400 rounded-b-md">
                        { filtered.slice(0,10).map((e,i) => (
                            <BlogSearch key={i} listNumber={i} data={e} />
                        ))}
                    </div>
            }
        </div>
    )
}