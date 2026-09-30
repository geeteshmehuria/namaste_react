import { useState } from "react"

const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    pink: "bg-pink-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    black: "bg-black",
    white: "bg-white",
    gray: "bg-gray-500",
}
function BackgroundColor() {
    const [bgColor, setBgColor] = useState("bg-white")


    const colorChangeHandle = (color) => {
        setBgColor(colors[color])
    }

    return (
        <>
            <div className="m-2 bg-transparent">
                {Object.keys(colors).map(color => {
                    return (
                        <button
                            key={color}
                            type="button"
                            className={`border border-solid border-gray-300 p-2 m-2 rounded-lg ${colors[color]} ${color === 'black' ? 'text-white' : 'text-black'}`}
                            onClick={() => colorChangeHandle(color)}>
                            {color}
                        </button>
                    )
                })}
            </div>
            <div className={`h-screen w-full ${bgColor}`}></div>
        </>
    )
}

export default BackgroundColor