// import { useEffect, useState } from "react";

import { Data } from "../App";

const Useeffect = () => {
  
  return (
    <>
 <Data.Consumer>
  {(message) => (
    <h1 className="text-red-500 text-[30px]">{message}</h1>
  )}
 </Data.Consumer>

    </>
  )
}

export default Useeffect