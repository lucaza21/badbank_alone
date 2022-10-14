function Login(){
  const [namestatus, setNameStatus]           = React.useState(false);
  const ctx = React.useContext(UserContext);

  const nombres_ctx = ctx.users.map(
          ( event => event.name)
      );
      //console.log(nombres_ctx);

  const prueba = ['luis', 'diana', 'maria'];

  
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");

  if(loginButton){

  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      if (username === "user" && password === "web_dev") {
          alert("You have successfully logged in.");
          location.reload();
      } else {
          loginErrorMsg.style.opacity = 1;
      }
  })
}

//if (vendors.some(e => e.Name === 'Magenic')) {
  /* vendors contains the element we're looking for */
//  }

let data = ctx.users;
let names = data.map ( item => item.name)
let pswd = data.map ( item => item.password)
let mails = data.map ( item => item.email)

console.log(names)
console.log(mails)
console.log(pswd)
  
const [password, setPassword] = React.useState("");
const [email, setEmail] = React.useState("");
const [passwordError, setpasswordError] = React.useState("");
const [emailError, setemailError] = React.useState("");

const handleValidation = (event) => {
let formIsValid = true;

if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
  formIsValid = false;
  setemailError("invalid Email");
  return false;

} else {
  setemailError("");
  formIsValid = true;
}

if (!password.match(/^[a-zA-Z]{8,22}$/)) {
  formIsValid = false;
  setpasswordError(
    "Invalid Password"
  );
  return false;
} else {
  setpasswordError("");
  formIsValid = true;
}

if(mails.includes(email) && (pswd.includes(password)) ) {
  formIsValid = true;
  alert("You have successfully logged in.");

}else {
  alert("Email or Password Error. please check your credentials or create an user.");
}


return formIsValid;

};

const loginSubmit = (e) => {
e.preventDefault();
handleValidation();
};


const style = {
  maxWidth : '18rem'
}

return (
  <>
    <div className="jdata">
      <div className="card text-white bg-dark mb-3" style={style}>
        <div className="card-header card text-center">
          <i className="fa fa-4x fa-sign-in"></i>
          Login
        </div>
        <div className="card-body">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <br />
            <div className="btn-with">
              <button type="submit" className="btn btn-outline-light btn-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
);
}
