import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const generateId = () => {
    return Math.floor(Math.random() * 10);
  };

const removeTodo = (id) => {
   setTodos((todos) =>  todos.filter((t)  => t.id !== id))
}

  const handdleSubmit = () => {
    setTodos(todos => 
      todos.concat({
        text:input,
        id:generateId()
      })
    )
    setInput(""); 
  }
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <h1>🐱‍💻Todos</h1>
<div className=" flex items-center gap-2">
<input
          type="text"
          className=" mt-5 border  h-[50px] pl-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=" New Todo"
        />
        <button onClick={handdleSubmit} className=" text-white px-7 py-5 bg-slate-500 mt-4">Submit</button>
</div>
<ul className=" flex items-center gap-4">
{
  todos.map(({text, id}) => {
     return <>
     <li className=" w-auto px-3 h-[50px] bg-white shadow-lg  flex items-center justify-center gap-4" key={id}>{text}
     <button className=" w-5 hover:scale-[1.04] transition-all ease-in-out duration-200 h-5 border flex items-center justify-center border-red-600" onClick={() => removeTodo(id)}>X</button>
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
