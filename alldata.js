function AllData(){
  const ctx = React.useContext(UserContext);

    let data = ctx.users

    let names = data.map( item =>{
        return <li key={item.name}> {item.name} </li>;
        console.log(item.name)
    })

    let pass = data.map( item =>{
      return <li key={item.password}> {item.password} </li>;
      console.log(item.password)
  })

  let mails = data.map( item =>{
      return <li key={item.email}> {item.email} </li>;
      console.log(item.email)
  })

  const style={
      json:{
          head: {
              backgroundColor: '#AAA0A0',
              color: '#844D36',
              fontWeight: 'bold'
              },
          body:{ 
              color: '#026670',
              backgroundColor: '#FEF9C7',
              fontSize: '18px',
              textAlign: 'screenLeft',
              fontWeight: 'normal'
              },

      },

      name:{
          head: {
              
              backgroundColor: '#EEE2DC',
              color: '#AC3B61',
              fontWeight: 'bold'
              },
          body:{ 
              color: '#EDC7B7',
              backgroundColor: '#123C69',
              fontSize: '18px',
              textAlign: 'screenLeft',
              fontWeight: 'normal'
              },

          icon: {
                  fontSize: "2rem", 
                  color: '#AC3B61'
          }
  },
      email:{
          head: {
                      
              backgroundColor: '#FFCB9A',
              color: '#2C3531',
              fontWeight: 'bold'
              },
          body:{
              color: '#D1E8E2',
              backgroundColor: '#116466',
              fontSize: '18px',
              textAlign: 'screenLeft',
              fontWeight: 'normal'
              },

          icon: {
                  fontSize: "2rem", 
                  color: '#2C3531'
          }
  },
      pass:{
          head: {
                      
              backgroundColor: '#A8D0E6',
              color: '#24305E',
              fontWeight: 'bold'
              },
          body:{
              color: '#F8E9A1',
              backgroundColor: '#F76C6C',
              fontSize: '18px',
              textAlign: 'screenLeft',
              fontWeight: 'normal'
              },

          icon: {
                  fontSize: "2rem", 
                  color: '#24305E'
          }
  },
}

  console.log(names);
  console.log(pass);
  console.log(mails);

  return(
      <>
      <div className='jdata'>
          <div className="card w-50">
              <div className="card-header text-center" style={style.json.head}>JSON DATA</div>
              <div className="card-body" style={style.json.body}>
              
              {JSON.stringify(ctx)}
             
              </div>
          </div>
          
      </div>

  
  <div className='card-group'>
  
    <div className='container'>
          <div className='carta'>
              <div className="card w-50">
                  <div className="card card-header text-center" style={style.name.head} >
                      <i className="fa fa-2x fa-address-card" style={style.name.icon}></i>
                          NAME
                  </div>
                  <div className="card card-body" style={style.name.body}>
                      <ul> {names}</ul>
                  </div>
              </div>
          </div>
          <div className='carta'>
              <div className="card w-80">
                  <div className="card card-header text-center" style={style.email.head} >
                      <i className="fa fa-2x fa-envelope" style={style.email.icon}></i>
                          EMAIL
                  </div>
                  <div className="card-body" style={style.email.body}>
                      <ul> {mails}</ul>
                  </div>
              </div>
          </div>    
          <div className='carta'>
              <div className="card w-50">
                  <div className="card card-header text-center"  style={style.pass.head}>
                      <i className="fa fa-2x fa-lock" style={style.pass.icon}></i>
                          PASSWORD
                  </div>
                  <div className="card-body" style={style.pass.body}>
                      <ul> {pass}</ul>
                  </div>
              </div>
          </div>
      </div>
      
     

</div>
</>
)
};