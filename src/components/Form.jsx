
import { useState } from "react";




const Form = () => {
const [username, setUsername] = useState("")

//  const  handdlechange = (e) => {
//     setUsername(e.target.value)
//  }

 const haddlesubmit = (e) => {
e.preventDefault()
alert(`you type: ${username}`)
setUsername("")
 }

  return (
    <>
    <div className=" text-[30px]">Form Demo❤</div>


    <form onSubmit={haddlesubmit}>
    <input type="text" placeholder="enter your name"  onChange={e => setUsername(e.target.value)} value={username} className=" mt-4 border" />
    <button>Submit</button>
    </form>
   </>
  )
}

export default Form;
