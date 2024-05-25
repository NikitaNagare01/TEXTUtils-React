
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert"
import { useState } from "react";

// import {
//   BrowserRouter as Router,

//   Route,

//   Routes,

// } from "react-router-dom";

function App() {

  const [mode, setmode]=useState("light");

  const [alert, setalert]=useState(null);

  const showalert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode activated", "success");
      document.title="TEXTUtils-dark mode";
    }else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("Light mode activated", "success");
      document.title="TEXTUtils-light mode";
    }
  }

  return (
    <>
    

    
      
      <Navbar title="TEXTUtils" mo={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        {/* <TextForm heading="Enter your text here"  mo={mode} showalert={showalert}/>
        <About/> */}

        {/* <Router> */}

          {/* <Routes> */}
            {/* <Route index element={<Navbar title="TEXTUtils" mo={mode} togglemode={togglemode}/>}/> */}
              {/* <Route path="/About" element={<About/>}/> */}
              {/* <Route path="/Home" element={<TextForm heading="Enter your text here"  mo={mode} showalert={showalert}/>}/> */}
              <TextForm heading="Enter your text here"  mo={mode} showalert={showalert}/>
      
        {/* 
            
          </Routes>
        </Router> */}



      </div>
      
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
