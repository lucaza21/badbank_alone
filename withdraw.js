function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [count, setCount] = React.useState(0);
  
  //////////////////////////////////////////
  const balance_ctx = ctx.users.map(
      ( event => event.balance)
  );
  console.log(balance_ctx);
  //////////////////////////////////////////
  let last_status =  `${Number(balance_ctx[0])}` ;
  const [status, setStatus] = React.useState(last_status); // el estado status nos muestra la suma total de lo que se tiene y valor depositado
                                                           //lo inicializmamos con el valor actual de el dato balance de ctx
  const [inc, setInc] = React.useState(0); //estado que maneja el valor a depositar en el historial ctx
  
  /////////////////////////////////////////
      
  const typess_list = ctx.users[0]['type']
  let t = typess_list[typess_list.length -1]
  let id_actual = (typess_list.length == '' || typess_list == null) ? 0 : t.id + Number(1);
  console.log('imprimindo typess_list.length: ' + typess_list.length);
  console.log('imprimindo id_actual: ' + id_actual);
  var [id, setId] = React.useState(id_actual);
  function incrementId() {
      setId(prevCount => prevCount + 1)
  }
  console.log('el id aumentó a:' + id);
  //////////////////////////////////////
  const [button2, setButton2] = React.useState(true);
  const handleChange = e => {
      console.log(`first:` + e.target.name, e.target.value)
       // le damos el valor de nuestro input al la variable inc que es la que se imprime en el historial ctx.users[0]['type'] 
      let enter_value = e.currentTarget.value;
      //if (enter_value.match(/^-\d+$/)) return alert('please enter a positive number')
      //if (enter_value == null || enter_value == '' || enter_value.match(/\s+/)){
      //    setButton2(true)
      //}
      //if(enter_value <= 0 || enter_value.match(/^-\d+$/) || enter_value.match(/^[a-zA-Z]*$/) || enter_value == null || enter_value == '' || enter_value.match(/\s+/)){
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
 console.log("estos es historial de retiros: " + JSON.stringify(x));
  const handleSubmit = e => {
      e.preventDefault();
      console.log('count' + count);
      
     
      let total = Number(status) - Number(count);
      console.log('total: ' + total);
      
      
      if(total < 0) return alert("transaction failed");
      else if (total >= 0) {
      
      setStatus(Math.round((total + Number.EPSILON) * 100) / 100);
      const newArr = ctx.users.map(obj => {
          if (obj.name === 'luis') {
            return {...obj, balance: total};
          }
        
          return obj;
        });
        
        console.log(newArr);
        ctx.users =  newArr;
        /////////////////////////////////////////
        let currentTime = new Date().toLocaleString();
        /////////////////////////////////////////
        console.log(" esto es lo que incrementamos, inc " + inc);
      
        let d = {'tipo': 'Retiro', 'valor': inc, 'imagen':'with.png', 
                  'bal': Math.round((total + Number.EPSILON) * 100) / 100 , 'id': id, 'time':currentTime};
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
       alert("successful Withdrawal");
      
       
       /////////////////////////////////////////
       incrementId();
      }
  }
  const style = {
      maxWidth : '18rem'
  }
  return (
    <>
      <div className="jdata">
        <div className="card text-white bg-warning mb-3" style={style}>
          <div className="card-header card text-center">
            <i className="fa fa-4x fa-download"></i>
            Your balance is: {status}
          </div>
          <div className="card-body">
            <h5 className="card-title">Enter a Value</h5>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  name="balance"
                  placeholder="write a value"
                  onChange={handleChange}
                />
              </div>

              <div className="btn-with">
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-sm"
                  disabled={button2}
                >
                  Withdraw
                </button>
                <a
                  href="#/balance"
                  className="btn btn-outline-secondary btn-sm"
                >
                  watch your History
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ); 
  };
