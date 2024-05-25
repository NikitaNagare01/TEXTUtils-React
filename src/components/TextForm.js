import React,{useState} from "react";

export default function TextForm(props) {
    
    const oncliup=()=>{
        let letex=text.toUpperCase();
        setText(letex);
        props.showalert("Converted to uppercase", "success");
    }
    const onclilo=()=>{
        let letex=text.toLowerCase();
        setText(letex);
        props.showalert("Converted to lowercase", "success");
    }
    const oncliclr=()=>{
        setText("");
        props.showalert("Text being erased", "success");
    }
    const onclicopy=()=>{
      let tex=document.getElementById("mybox");
      tex.select();
      navigator.clipboard.writeText(tex.value);
      props.showalert("Text copied", "success");
    }
    
    const onchn=(event)=>{
        setText(event.target.value);
    }

    const[text, setText]=useState("Enter text here2");
  return (
    <>

    
    <div className="container" style={{color:props.mo==="light" ? "black" : "white"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          rows="8"
          onChange={onchn}
          style={{backgroundColor:props.mo==="light" ? "white" : "grey", color:props.mo==="light" ? "black" : "white"}}
          id="mybox"
        
        ></textarea>
      </div>
        <button className="btn btn-primary mx-3" onClick={oncliup}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={onclilo}>Convert to lowercasecase</button>
        <button className="btn btn-primary mx-3" onClick={oncliclr}>clear</button>
        <button className="btn btn-primary mx-3" onClick={onclicopy}>Copy</button>
    </div>

    <div className="container my-3" style={{color:props.mo==="light" ? "black" : "white"}}>
        <h1>Word and character count</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
    </div>

    <div className="container" style={{color:props.mo==="light" ? "black" : "white"}}>
        <h1>Preview</h1>
        <p>{text.length>0 ? text : "Enter something to see preview"}</p>
    </div>
    </>
  );
}
