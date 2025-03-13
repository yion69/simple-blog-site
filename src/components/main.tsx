import { useState } from "react";
import Blog from "./ui/blog";
import Button from "./ui/button";

export interface BlogProps {
    title: string,
    body: string,
    userId: number,
    id: number
}

export default function Main ({ data }: { data: BlogProps[] }) {

    const [blogCount, setBlogCount] = useState<number>(10);
    const loadBlog = () => {
        if(data.length === blogCount) return;
        setBlogCount(prev => prev + 10);
    }
    
    return (
        <div className="flex flex-col w-full h-auto gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 row-auto gap-2">
                {
                    data.slice(0,blogCount).map((item,index) => (
                        <Blog 
                            key={index}
                            title={ item.title }
                            body={ item.body}
                            userId={ item.userId}
                            id={ item.id } />
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center w-full h-fit col-span-2">
                { 
                    blogCount !== data.length &&
                        <Button 
                        text={ "Load More" } 
                        size={ "full" } 
                        color={ "primary" } 
                        onClick={ loadBlog } />
                }
                <span className="py-4">Showing {blogCount} / {data.length}</span>
            </div>
        </div>
    )
}