import React from 'react';
import Navbar from './Navbar';
import Textform from './Textform';
function App(){
  return (
    <>
  <Navbar title="Textutils" home="Home" about="About Us" />
   
   <div className="newText" style={{margin: "20px"}}>
    < Textform />
   </div>
  
  </>
  );
}


export default App;