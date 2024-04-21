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
  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form action="">
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p>{errorUserName}</p>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) =>  setEmail(e.target.value)}
          />
          <p>{erroreEmail}</p>

          <input
            type="number"
            placeholder="Password"
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
          />
          <p>{errorPassword}</p>

          <input
            type="number"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>  setConfirmPassword(e.target.value)}
          />
          <p>{errorConfirmPassword}</p>


        </form>
      </div>
    </>
  );
};

export default Validate;
