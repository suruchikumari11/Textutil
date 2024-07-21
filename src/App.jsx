import './App.css'
import Navbar from './Navbar.jsx'
import React, { useState } from 'react';
import Alert from './Alert.jsx';
import Textform from './Textform.jsx';
import About from './About.jsx'
import { Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
   const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null);
    },2000)

  }

  const toogleMode=()=>{
    if(mode === "light" ){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      document.title='title/darkmode';
      showAlert("Dark mode has been enabled","sucess");
    }else {
    setMode('light')
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","sucess");
   }
  }
  return (
  
    <>
    
          <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
       
          <Alert alert={alert}/>
          <Routes>
          
            <Route path='/' element={ < Textform  showAlert={showAlert}heading="Enter a text" mode={mode} /> }/>
            <Route path='/about' element={<About/>}/>
          </Routes>  
  </>
)
}

export default App;
