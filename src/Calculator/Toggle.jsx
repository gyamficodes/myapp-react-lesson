import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Toggle = () => {
  const [showinput, setShowinput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handdleClick = (e) => {
setBgColor("#1a1a1a");
if(e.target.className === "container"){
  setShowinput(true);
  setBgColor("#fff")
}
  }

  return <>
  <h1> A simple hidden search bar</h1>
  <section className="container h-[400px] w-full flex flex-col justify-center items-center  transition-all ease-in-out duration-200 " style={{ background:bgColor}} onClick={handdleClick}>

{
showinput ? (
  <input className=" px-4 py-4  bg-transparent outline-none border-[1px]  border-[#fff] text-white rounded-[3px] shadow-lg" type="text"  placeholder="search..."/>
) : (

  <FaSearch className="text-[30px]" onClick={() => setShowinput(true)}/>
   )
}
  </section>
  
  </>;
};

export default Toggle;
