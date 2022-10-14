function Deposit(){
  const ctx = React.useContext(UserContext); // pasamos el contexto
  const [count, setCount] = React.useState(0); //estado que maneja el valor a depositar
  //const [status, setStatus] = React.useState(100);
  //////////////////////////////////////////
  const balance_ctx = ctx.users.map(
      ( event => event.balance)
  );
  console.log(balance_ctx); //pruebas accediendo al valor balance del contexto ctx
  //////////////////////////////////////////
  let last_status =  `${Number(balance_ctx[0])}` ;
  const [status, setStatus] = React.useState(last_status); // el estado status nos muestra la suma total de lo que se tiene y valor depositado
                                                           //lo inicializmamos con el valor actual de el dato balance de ctx
  const [inc, setInc] = React.useState(0); //estado que maneja el valor a depositar en el historial ctx
 
  /////////////////////////////////////////
  
  const typess_list = ctx.users[0]['type']
  let t = typess_list[typess_list.length -1]
  let id_actual = (typess_list.length == '' || typess_list == null) ? 0 : t.id+ Number(1);
  console.log('imprimindo typess_list.length: ' + typess_list.length);
  console.log('imprimindo id_actual: ' + id_actual);
  var [id, setId] = React.useState(id_actual);
  function incrementId() {
      setId(prevCount => prevCount + 1)
  }
  console.log('el id aumentó a:' + id);    
  /////////////////////////////////////////
  const [button2, setButton2] = React.useState(true);
  const handleChange = e => {
      console.log(`first:` + e.target.name, e.target.value)
       // le damos el valor de nuestro input al la variable inc que es la que se imprime en el historial ctx.users[0]['type'] 
      let enter_value = e.currentTarget.value;

      //if(enter_value <= 0 || enter_value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) || enter_value.match(/^[a-zA-Z]*$/) || enter_value == null || enter_value == '' || enter_value.match(/\s+/)){
      if (isNaN(enter_value) || enter_value.match(/^-\d+$/) || enter_value == null || enter_value == '' || enter_value.match(/\s+/)){    
      setButton2(true)
          alert('please enter a positive number')
      }else { 
      
          setButton2(false);
          setCount(e.target.value)
          setInc(e.target.value); 
      };
  }
  //////////////////////////////////////
  
  var x = ctx.users[0]
  console.log("estos es historial de depositos: " + JSON.stringify(x));
  const handleSubmit = e => {
      e.preventDefault();
      console.log('count' + Number(count));
      
     
      let total = Number(status) + Number(count); // variable total = valor actual del status en la cuenta + count
      console.log('total: ' + total);
      setStatus(Math.round((total + Number.EPSILON) * 100) / 100);                           // le damos el valor del total al status global
      
       const newArr = ctx.users.map(obj => {      // creamos una nueva array mapeando ctx.users (nuestro contexto)
          if (obj.name === 'luis') {              // targeteamos el usuario con name == luis
            return {...obj, balance: total};      // regresamos el objeto completo cambiando el valor de balance de luis con el valor de total
          }
        
          return obj;     
        });
        
        console.log(newArr);
        ctx.users =  newArr;        // igualamos el ctx.users a la nueva array creada anteriormente para actualizar el contexto a nivel global
      
        /////////////////////////////////////////
        let currentTime = new Date().toLocaleString();
        /////////////////////////////////////////
        console.log(" esto es lo que incrementamos, inc " + inc);
      
        let d = {'tipo': 'Deposito', 'valor': inc, 'imagen': 'dep.png', 
                  'bal': Math.round((total + Number.EPSILON) * 100) / 100, 'id': id, 'time':currentTime};
        console.log('se ha hecho la transanccion con tipo: ' + JSON.stringify(d));
       // Object.assign(ctx.users[0].type[inc],d);
       if(ctx.users[0]['type'] && ctx.users[0]['type'].length > 0) {
          //List already exists so add the new animal
          //TODO also check if the animal is already in the list?
          ctx.users[0]['type'].push(d);
       }else {
          //Create the new list
          ctx.users[0]['type'] = [d];
       }
       console.log("historial: " + JSON.stringify(ctx.users[0]));
       alert("successful deposit");

      /////////////////////////////////////////
       incrementId();
  }

  const style = {
      maxWidth : '18rem'
  }
  return(
      <>
      <div className="jdata">
          <div className="card text-white bg-success mb-3" style={style}>
          
              <div className="card-header card text-center">
                  <i className="fa fa-4x fa-upload"></i>
                  Your balance is: {status}
              </div>
                  <div className="card-body">
                      <h5 className="card-title">Enter a Value</h5>
                      <form onSubmit={handleSubmit}>
                              <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text">$</span>
                                  </div>
                                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" 
                                  name="balance" placeholder="write a value"
                                  onChange={handleChange}/>
                              </div>   
                              <div className="btn-with">
                                  <button type="submit" className="btn btn-outline-dark btn-sm" disabled={button2}>
                                          Deposit
                                  </button>
                                  <a href="#/balance" className="btn btn-outline-light btn-sm">watch your History</a>  
                                  
                              </div>
                      </form> 
                  </div > 
          </div>     
      </div>
      </>
  )
};