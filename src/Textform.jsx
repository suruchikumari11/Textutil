import React, { useState } from 'react';
import './App.css'
export default function Textform(props){

    const handleUpClick=(()=>{
     console.log("buton was click");
   let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted into uppercase","success");
    });
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("speak","success");
    }
    const handleCapClick = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
     props.showAlert("converted into capatialization","success");
     };
  

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
     props.showAlert("converted into reversed","success");
  };

    const handleClear=(()=>{
      console.log("buton was click");
    let newText="";
     setText(newText);
     props.showAlert("clear text","success");
     });
    const handleLoClick=(()=>{
      console.log("buton was click");
    let newText=text.toLowerCase();
     setText(newText);
      props.showAlert("converted into lowercase","success");
     }); 

const handleOnClick=((event)=>{
        setText(event.target.value);
      
        
});
    const [text, setText] = useState("enter a text");
 return(
   <>
   
   <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
   <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="box" rows="8" value={text} onChange={handleOnClick}></textarea>
   </div>
   <div className='btn1'>
   <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize</button>
   <button type="button" className="btn btn-primary mx-2" onClick={ handleReverse}> reversed</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>clear</button>
   <button type="button" className="btn btn-primary mx-2" onClick={speak}>speak</button>
   </div>
   
   <div className="container my-3"style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>count a text</h1>
    <p>{text.split(" ").length} words and {text.length} char</p>
    <p>{0.008 * text.split (" ").length} Minutes read </p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
   </div>
   </>
    );
}