interface ButtonProps {
    text: string,
    size: "sm" | "md" | "lg" | "full",
    color: "primary" | "secondary" | "danger" | "warning" | "success" | "info",
    onClick: () => void,
}

export default function Button ({ text, size, color, onClick }: ButtonProps) {

    const buttonSizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        full: 'w-full py-4 text-base'
    }
    const buttonColor = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
        danger: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-white',
        success: 'bg-green-500 text-white',
        info: 'bg-blue-500 text-white',
    }

    return (
        <button 
            type="button" 
            title="btn" 
            className={`${buttonSizes[size]} ${buttonColor[color]} rounded-md cursor-pointer hover:scale-95 transition-all`} 
            onClick={onClick}>
                { text }
        </button>
    )
}