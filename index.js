
function Spa(){
    return(
        <HashRouter>
            <NavBar/>
             <br/>
            <UserContext.Provider value ={
                {users: 
                    [
                        {
                            name: 'luis',
                            email:'luis@mit.com',
                            password:'qwertyui', 
                            balance:100,
                            type: "",
                            
                        },
                        {
                            name: 'diana',
                            email:'diana@mit.com',
                            password:'asdfghjk', 
                            balance:200
                        }
                    ]
            }}>
                <Routes>
                    <Route path="/"          exact element={<Home/>}></Route>
                    <Route path="/createaccount/"    element={<CreateAccount/>}></Route>
                    <Route path="/login/"            element={<Login/>}></Route>
                    <Route path="/deposit/"          element={<Deposit/>}></Route>
                    <Route path="/withdraw/"         element={<Withdraw/>}></Route>
                    <Route path="/balance/"          element={<Balance/>}></Route>
                    <Route path="/alldata/"          element={<AllData/>}></Route>
                    <Route path="/navbar/"          element={<NavBar/>}></Route> 
                </Routes>
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)