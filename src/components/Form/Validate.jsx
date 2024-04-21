
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
if(password.length > 8){
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
      <div className="card">
        <div className="card-image"></div>

        <form action="">
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor:userColor }}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p>{errorUserName}</p>

          <input
            type="text"
            style={{ borderColor:emailColor }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{erroreEmail}</p>

          <input
            type="Password"
            placeholder="Password"
            style={{ borderColor:passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errorPassword}</p>

          <input
            type="Password"
            placeholder="Confirm Password"
            style={{ borderColor:confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={Validtae}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Validate;
