import { CloudAlert } from "lucide-react"

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center grow w-full h-full gap-2">
            <CloudAlert size={50} />
            <h3>An error occurred</h3>
        </div>
    )
}