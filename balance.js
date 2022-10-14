function Balance(){
  const ctx = React.useContext(UserContext);
//////////////////////////////////////////////////////
  const typess = ctx.users[0]['type']
  console.log('mostrando types: ' + JSON.stringify(typess));
  let currentTime = new Date().toLocaleString();
/////////////////////////////////////////////
  
if(typess.length >0){ 
console.log('cadena con datos: ' + JSON.stringify(typess));
console.log('cadena con items')
} 
let last_status =  Number(ctx.users[0]['balance']) ;
const style={
fontSize: "2rem", 
color: "khaki"
}
  return(
      <>
      <div>
      <br/>
      </div>
      
      {
          !typess.length ? (

            <div className="jdata">
              <div className='carts'>
                <Card
                bgcolor="light"
                header={
                  <>
                  <div className="card-header card text-center">
                  <i className="fa fa-2x fa-balance-scale " style={style}></i>
                  <h5>Aun no se han llevado a cabo movientos</h5>
                  </div>
                  </>
                }
                body={
                  <>
                  <div className="text-center text-danger">
                    <h5 className="balance mb-3">Saldo actual: $ {last_status}</h5>
                  </div>
                  </>
                }
              />
            </div>
            </div>
          ) : (
            <ul className="row row-cols-md-4" >
              

              {typess.map(item => (
          
          
          <div className='col' key={item.id}>

        

              <div className='jdata' key={item.id}>
                
            <Card
              bgcolor="light"
              header={
                <>
                
                <div className="card-header card text-center bg-danger" >
                <i className="fa fa-2x fa-balance-scale " style={style}></i>
                <h5>Movimiento Realizado</h5>
                </div>
                </>
              }
              body={
                <>
                <div className="text-center text-danger">
                  <h5 className="balance mb-3">Saldo actual: {item.bal}</h5>
                  <div className="alldata">
                    <h6>Tipo: {item.tipo}</h6>
                    <h6>Monto: $ {item.valor}</h6>
                    <h6>Fecha: {item.time}</h6>
                    <img src={item.imagen} className="img-fluid"
                    alt="Responsive image" width="20%"
                    height= "auto"/>
                  </div>
                </div>
                </>
              }
            />
            </div>
          </div>
          ))
            }
           
            </ul>
            )
        }
     
      </>   
  )
};