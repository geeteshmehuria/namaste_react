import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h1 className="text-3xl font-bold m-3">
                {count}
            </h1>
            <div className="flex">
                <button type="button" className="border border-solid border-gray-300 p-2 m-2 rounded-lg" onClick={addCount} disabled={count === 10 ? true : false}> + num</button>
                <button type="button" className="border border-solid border-gray-300 p-2 m-2 rounded-lg" onClick={removeCount} disabled={count === 0 ? true : false}> - num</button>
            </div>
        </>
    )
}

export default Counter