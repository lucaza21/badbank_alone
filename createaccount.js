function CreateAccount(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [name, setName]               = React.useState('');
  const [email, setEmail]             = React.useState('');
  const [password, setPassword]       = React.useState('');
  
  const ctx                           = React.useContext(UserContext);


  const [emailError, setemailError] = React.useState("");
  const [passwordError, setpasswordError] = React.useState("");

  function validate(field, label){
      if(!field){
          setStatus('Error: ' + label);
          setTimeout(() =>setStatus(''),3000);
          return false;
      }

      setemailError("");
      setpasswordError("");
      return true;
  }


  function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,      'name')) return ;
      if ( (!validate(email,     'email')) || (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) ) return setemailError("Email Not Valid");
      if ( (!validate(password,  'password')) || (!password.match(/^[a-zA-Z]{8,22}$/)) ) return setpasswordError(
          "Only Letters and length must best min 8 Chracters and Max 22 Chracters");

      ctx.users.push({name,email,password,balance:100,type:""});
      alert("success! You will receive $100 bonus for preffer us.");
      setShow(false);
      
  }

  function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      setButton2(true);
  }

  ////////////////////////////////////////////////////////////
  const [button2, setButton2] = React.useState(true);
       function HandleName (e){
       if(e.currentTarget.value.length>0){
           setName(e.currentTarget.value);
           setButton2(false)
       } else { 
           setName(e.currentTarget.value);
           setButton2(true)
         }
       }

   function HandleEmail (e){
       if(e.currentTarget.value.length>0){
           setEmail(e.currentTarget.value);
           setButton2(false);
       } else { 
           setEmail(e.currentTarget.value);
           setButton2(true)
         }
       }
  ////////////////////////////////////////////////////////////
  const style = {
      maxWidth : '18rem'
  }
  
  return(
      <div style={{position:'flex'}}>
      <div className="jdata">
          <Card 
              bgcolor="secondary"
          header={
              <>
              <div className="card-header card text-center">
              <i className="fa fa-2x fa-address-book-o " style={style}></i>
              <h5>Create your account</h5>
              </div>
              </>
          }
          status={status}
          body={show ? (
              <>
              Name <br/>
              <input type="input" className="form-control" id="name"
              placeholder="Enter name" value={name} 
              onChange={HandleName} /><br/>
              Email <br/>
              <input type="input" className="form-control" id="email"
              placeholder="Enter name" value={email} 
              onChange={HandleEmail} />

              <small id="emailHelp" className="mb-2 bg-danger text-white font-weight-bold">
                  {emailError}
              </small>
              <br/>

              Password <br/>
              <input type="input" className="form-control" id="password"
              placeholder="Enter name" value={password} 
              onChange={e => setPassword(e.currentTarget.value)} />

              <small id="passwordHelp" className=" bg-danger text-white font-weight-bold">
                  {passwordError}
              </small>

              <br/>
              <button type="submit" className="btn btn-light" disabled={button2}
              onClick={handleCreate}>Create Account</button>
              <br/>
              </>
          ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light"
              onClick={clearForm}>Add another account</button>
              </>
      )}
      
      />
      </div>
      </div>
  )
};