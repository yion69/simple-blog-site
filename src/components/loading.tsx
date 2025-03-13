export default function Loading () {
    return(
        <div className="flex flex-col items-center justify-center grow w-full h-full gap-2">
            <div className="w-10 h-10 border-4 border-t-transparent border-zinc-950 rounded-full animate-spin"></div>
            <h3>Fetching Blogs</h3>
        </div>
    )
}