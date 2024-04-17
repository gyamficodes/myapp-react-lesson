/* eslint-disable no-const-assign */
// "use client";
import { useState } from "react"

const State = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Gyamfi');

  const [friends, setFriends] = useState(['John', 'Osei', "Hannah"]);

  const addlus = () => {
      setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  function ChangeName(){
    setName('GyamfiJohn')
  }

  const addOne = () => {
         setFriends([...friends, "JohnG"])
  }

  const removeOne = () => {
    setFriends( friends.filter(f => f !==   "John"))
}

const [movies] = useState([
  {
    id: 1,
    title: "The Green Building",
    rating: 6,
  },
  {id: 2,
    title: "The Green ",
    rating: 4,
  },
  {id: 3,
    title: "The  Building",
    rating: 4,
  },
])

  return (
    <>
{/* array of object */}

{
  movies.map(movie => (
      <ul key={movie.id} className=" flex">
        <li>{movie.title}</li>
        <li>{movie.rating}</li>
      </ul>
  ))
}


  <h1 className=" text-[20px]">{count}</h1>
  <button onClick={addlus} className=" w-[50px] h-[50px] bg-black text-white">+</button>
  <button onClick={decrease} className="w-[50px] h-[50px] bg-black text-white">-</button>
  <button onClick={ChangeName}>Change name</button>
  <h1>{name}</h1>


<h1>friends 😘</h1>
{
  friends.map((f) => (
    <li key={Math.random()}>{f}</li>
  ))
}


<div className=" flex items-center gap-3">
<button onClick={addOne} className=" w-[100px] h-[50px] bg-slate-400 text-black">AddFriends</button>
<button onClick={removeOne} className=" w-[100px] h-[50px] bg-slate-400 text-black">RemoveFriends</button>
<button className=" w-[100px] h-[50px] bg-slate-400 text-black">UpdateFriends</button>

</div>
    </>
  )
}

export default State