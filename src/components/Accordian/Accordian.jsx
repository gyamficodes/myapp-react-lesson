
import { useState } from "react";

const Accordian = ({title, content}) => {
const [isactive, setIsactive] = useState(false)


  return (
  <>

  <section className="  p-[20px] text-white bg-[#494949] w-[450px]  justify-between transition-all duration-200 ease-in-out">
    <div className=" flex items-center  justify-between   cursor-pointer  " onClick={() => setIsactive(!isactive)}>
      <div className=" flex items-center">{title}</div>
      <span className=" material-symbols-outlined text-[1.5rem]">{isactive ? "remove" : "add"}</span>
    </div>
    <div className="transition-all duration-200 ease-in-out p-3"  >
    {isactive && <p>{content}</p>}
      </div>
  </section>
  
  </>
  )
}

export default Accordian;