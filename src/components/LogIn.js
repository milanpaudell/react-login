// import React from "react";

// export default function LogIn() {
//   return (
//     <form>
//       <div className="input-box">
//         <label>Username </label>
//         <input type="text" name="username" id="username" required />
//         <i></i>
//       </div>
//       <div className="input-box">
//         <label>Password </label>
//         <input type="password" name="password" id="password" required />
//         <i></i>
//       </div>
//       <button type="submit"> Sign In </button>
//       <div className="links">
//         <a href="#">Forgot Password</a>
//         <a href="#">Sign Up</a>
//       </div>
//     </form>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useRef, useState } from "react";

export default function LogIn() {
  const [msg, setMsg] = useState("");
  const nameRef = useRef();
  const passRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    if (
      nameRef.current.value === "admin" &&
      passRef.current.value === "admin"
    ) {
      setMsg("login sucessfully");
    } else {
      setMsg("login failed!");
    }
  };
  return (
    <form>
      <div className="input-box">
        <label>Username </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          ref={nameRef}
        />
        <i></i>
      </div>
      <div className="input-box">
        <label>Password </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          ref={passRef}
        />
        <i></i>
      </div>
      <button type="submit" onClick={handleClick}>
        Sign In
      </button>
      <div className="links">
        <a href="#">Forgot Password</a>
        <a href="#">Sign Up</a>
      </div>
      <div className="message" >
      <i>{msg}</i>
      </div>
    </form>
  );
}