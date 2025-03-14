import { createContext, useContext, useEffect, useState } from "react";
import { BlogProps } from "../interfaces/BlogInterface";

//Set interface for the context value
//BlogContext value have state and a function for selected blog
//BlogState is to store the data and the function is to set the state
interface BlogContextInterface {
    selectedBlog: BlogProps | null,
    setSelectedBlog: (blog: BlogProps | null) => void
}

//If users press on the blog via the main page or search the pressed blog's data will be store in this context
//Alternatively, the pressed blog data can be fetched directly server again with id but in this case blog's id 
//is a single or dobule digit so wouldnt be optimal  
const BlogContext = createContext<BlogContextInterface | undefined>(undefined);

export function BlogProvider({ children }:{ children: React.ReactNode}) {
    const [selectedBlog, setSelectedBlog] = useState<BlogProps | null>(null);

    useEffect(() => {
        console.log(selectedBlog);
    },[selectedBlog])
    return (
        <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
            { children }
        </BlogContext.Provider>
    )
}

export function useSelectedBlog() {
    const context = useContext(BlogContext);
    if(!context) { throw new Error("use useSelectedBlog within provider")};
    return context;
}

