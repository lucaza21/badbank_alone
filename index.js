function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "luis",
              email: "luis@mit.com",
              password: "qwertyui",
              balance: 100,
              type: "",
            },
            {
              name: "diana",
              email: "diana@mit.com",
              password: "asdfghjk",
              balance: 200,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
