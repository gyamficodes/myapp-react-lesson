import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
   const  [news, setNews] = useState("")    


  const generateId = () => {
    return Math.floor(Math.random() * 100);
  };

const removeTodo = (id) => setTodos((todos) =>  todos.filter((t)  => t.id !== id))


  const handdleSubmit = () => {
    const newTodos = {
      text: input,
      date: news,
      id: generateId()
    }
    setTodos((prevTodos) => [...prevTodos, newTodos]);
    setInput(""); 
  }
  return (
    <>
      <div className=" flex items-center justify-center flex-col  h-auto py-4 w-full   bg-slate-200 shadow-xl">
        <h1>🐱‍💻Todos</h1>
<div className=" flex items-center gap-2 mb-5">
<input
          type="text"
          className=" mt-5 border  h-[50px] pl-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=" New Todo"
        />
        <input type="date" className="mt-5 border  h-[50px] pl-5" value={news}  placeholder="Todo description"  onChange={(e) => setNews(e.target.value)} />
        <button onClick={handdleSubmit} className=" text-white px-7 py-5 bg-slate-500 mt-4">Submit</button>
</div>
<ul className=" flex items-center  flex-col gap-4">
{
  todos.map(({text, id, date}) => {
     return <>
     <li className=" w-[300px] px-3 h-[auto] py-3 bg-white shadow-lg   rounded-xl   capitalize" key={id}>
    <div className="flex items-center   justify-between ">
      <h1>{text}</h1>
    <button className=" w-5 hover:scale-[1.04] transition-all ease-in-out duration-200 h-5 border flex items-center justify-center border-red-600" onClick={() => removeTodo(id)}>X</button>
    </div>
    <h1 className=" flex items-center justify-center mt-1">Date: {date} </h1>
     </li>
     </> 
  })
}
</ul>
      </div>
    </>
  );
};

export default Todo;
