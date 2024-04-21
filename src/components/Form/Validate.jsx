
import { useState } from "react";

const Validate = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [erroreEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setconfirmPasswordColor] = useState("");

const Validtae = (e) => {
   e.preventDefault();
if(username.length > 8){
       setErrorUserName("");
    setUserColor("green")
}
if(username.length < 8){
    setErrorUserName("UserName must be 8 letters long");
    setUserColor("red")
}

if(email.includes("@gmail")){
    setErrorEmail("");
 setEmailColor("green")
}else{
    setErrorEmail("Email should have @gmail")
    setEmailColor("red")
}

e.preventDefault();
if(password.length >= 8){
       setErrorPassword("");
    setPasswordColor("green")
}
if(password.length < 8){
    setErrorPassword("Password is not strong");
    setPasswordColor("red")
}

if(password !== "" && password === confirmPassword){  
setErrorConfirmPassword("");
setconfirmPasswordColor("green");

}else{
    setErrorConfirmPassword("Password did‘t matched");
setconfirmPasswordColor("red");
}



}
  return (
    <>
   <div className="   w-full   h-auto   bg-slate-100 flex items-center flex-col gap-3">
   <div className=" grid grid-cols-2 gap-4 ">
        <div className="card-image  w-full">
            <img className=" h-full" src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8fDA%3D" alt="" />
        </div>


<div className="  pr-3 w-full  pb-2  ">
    
<form  action="">
          <input
          className=" outline-none  border-b-[1px] border-b-[#ccc] p-[10px]  m-[5px]  w-full bg-transparent "
            type="text"
            placeholder="Name"
            style={{ borderColor:userColor }}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className=" text-red-500 font-sans">{errorUserName}</p>

          <input
            type="text"
            className="  outline-none  border-b-[1px] border-b-[#ccc] p-[10px]  m-[5px]  w-full bg-transparent"
            style={{ borderColor:emailColor }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p  className=" text-red-500 font-sans">{erroreEmail}</p>

          <input
            type="Password"
            className="  outline-none  border-b-[1px] border-b-[#ccc] p-[10px]  m-[5px]  w-full bg-transparent"
            placeholder="Password"
            style={{ borderColor:passwordColor}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className=" text-red-500 font-sans">{errorPassword}</p>

          <input
            type="Password"
            className="  outline-none  border-b-[1px] border-b-[#ccc] p-[10px]  m-[5px]  w-full bg-transparent"
            placeholder="Confirm Password"
            style={{ borderColor:confirmPasswordColor}}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className=" text-red-500 font-sans">{errorConfirmPassword}</p>

          <button className="submit-btn w-[80%] mt-[20px] bg-transparent bg-[#FF5A7B] border-none p-4 text-white font-bold" onClick={Validtae}>Submit</button>
        </form>
</div>
      </div>

   </div>
    </>
  );
};

export default Validate;
