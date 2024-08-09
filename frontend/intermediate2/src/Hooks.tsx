import React, {useState, useEffect} from "react"

const Hooks: React.FC = () => {
    const [count, setCount] = useState(1)

    useEffect(()=>{
        console.log('Component Dipasang');
        return()=>{
            console.log('Component Dilepas');
        }
    }),
    useEffect(()=>{
        console.log('component di update')
        return()=>{
            console.log('component akan dilepas')
        }
    },[count])

    // const resetCount = () =>{
    //     useState(0)
    //     return
    // }
    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={() => setCount(count + 1)} className="p-2 px-5 bg-green-500 rounded-md">Add</button>
            <button onClick={() => setCount(count - count)} className="mx-1 p-2 bg-red-500 rounded-md">Reset Counting</button>
        </div>
        )
    };

export default Hooks;
