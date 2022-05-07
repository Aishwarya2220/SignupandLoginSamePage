import { useState } from "react";

function Signin() {
  const [login, change] = useState(false);
  console.log(login);
  function handleclickLogin() {
    change(true);
  }
  function handleclickSignup() {
    change(false);
  }
  return (
    <>
      <div className="Login">
        <div>
          <button className="loginbtn" onClick={handleclickLogin}>
            Login
          </button>
          <button className="signupbtn" onClick={handleclickSignup}>
            Signup
          </button>
        </div>
        <div>
          {login ? (
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
            </form>
          ) : (
            ""
          )}
        </div>
        <div>
          {!login ? (
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="Set password" />
              <input type="password" placeholder="Repeat password" />
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
export default Signin;
