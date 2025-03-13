import React, { useState } from "react"
import { BlogProps } from "./main";

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
    return (
        <div className="relative flex w-full h-fit">
            <div className="flex items-center justify-end w-full h-fit">
                <input type="text" title="search-bar" className="w-full h-12 px-6 py-2 rounded-md border-2 border-zinc-300 bg-zinc-50 outline-0" onChange={handleQueryChange} placeholder="Search..." />
            </div>
            {
                query.length !== 0 &&
                    <div className="absolute flex flex-col top-11 h-fit w-full gap-1 bg-zinc-100 border-2 border-zinc-300 rounded-b-md">
                        { filtered.slice(0,10).map((e,i) => (
                            <div key={i} className="flex flex-col justify-center p-6">
                                <span className="text-lg">{i+1}. {e.title}</span>
                                <p className="text-sm text-zinc-700">{e.body}</p>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}