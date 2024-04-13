"use client";

import Add from "./components/Add";
import Cart from "./components/Cart";
import State from "./components/State";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Useeffect from "./components/Useeffect";

// first import  creatcontext api 
import { createContext } from "react";
// create an instace for the (createcontext )
export const Data = createContext();


function App() {
 

  const name = "John";

  const message = 'Please Huxun course is good and this provide abd inject in react 👍';


  const [theme, setTheme] = useState("light_mode"); // Change default theme to "light_mode"
  const options = [
    { text: "dark_mode", icon: "dark_mode" },
    { text: "light_mode", icon: "light_mode" },
  ];

  useEffect(() => {
    if (theme === "dark_mode") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  return (
    <div className="App bg-white text-black dark:bg-slate-800 dark:text-white">
{/* we have to wrap our component with provider  component*/}
<Data.Provider value={message}>
<Useeffect /> 
</Data.Provider>
{/* we have to wrap our component with provider  component*/}

      <div className="fixed top-5 right-10 duration-200 bg-slate-800 dark:bg-slate-700">
        {options.map((opt) => (
          <button
            onClick={() => setTheme(opt.text)}
            key={opt.text}
            className={`w-8 h-8 text-xl leading-9 bg-slate-600 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <span className="material-symbols-outlined">{opt.icon}</span>
          </button>
        ))}
      </div>
      <Add name={name} text="Fullstack Developer" age="22" info="Focused">
        <p className="duration-150">Hello please this is slot</p>
      </Add>
      <Cart />
      <State />
      <Form/>





<h1>dfddsgufsjdk.</h1>

    </div>
  );
}

export default App;
