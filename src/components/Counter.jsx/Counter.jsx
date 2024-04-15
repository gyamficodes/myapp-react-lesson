import { useState } from "react"


function Counter(){
let [count, setCount] = useState(0)

const increament = () => setCount(count + 1);
const decreament = () => setCount(count - 1);
const reset = () => setCount(count = 0 );

  return (
    <>
     <div className="  flex items-center justify-center flex-col">
        <h1>My frist simple Counter project with react</h1>
     <h1 className=" text-[50px]">{count}</h1>
       
       <div className=" flex items-center gap-4">
     <button onClick={increament} className=" text-white px-6 rounded-[100px] py-4 bg-gray-400">+</button>
     <button onClick={decreament} className=" text-white px-6 rounded-[100px] py-4 bg-gray-400">-</button>
     <button onClick={reset} className=" text-white px-6 rounded-[100px] py-4 bg-gray-400">reset</button>
       </div>
     </div>
    </>
  )
}

export default Counter