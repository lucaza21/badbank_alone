function Home(){
    
    
  return(
      <div className="jdata">
          <Card 
              
              txtcolor = "black"
              header="BadBank landing Page"
              title="Welcome to the bank"
              text="You can move arround using the navigation bar."
              body={(<img src="bank.png" className="img-fluid"
              alt="Responsive image"/>)}
          />
      </div>
  );
}