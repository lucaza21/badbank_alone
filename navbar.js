
function NavBar(){

  const style = {
    backgroundColor: "#e3f2fd"
  }

    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light" style={style}>
<div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">

      <li className="nav-item">
        <NavLink to="/#/" activeclassname="active">
            Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/createaccount/" activeclassname="active">
            Create Account
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login/"activeclassname="active">
            Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/deposit/" activeclassname="active">
            Deposit
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/withdraw/" activeclassname="active">
            Withdraw
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/alldata/" activeclassname="active">
            AllData
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/balance/" activeclassname="active">
            History
        </NavLink>
      </li>
        </ul>
      </div>    
</div>
 </nav>

        </>
    )
};