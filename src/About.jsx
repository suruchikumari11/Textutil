import React, { useState } from 'react';
export default function About(props){
    
    const [mystyles, setMyStyle] = useState(
    {
        color:"black",
        backgroundColor:"white"
    })
    const [btn, setBtn] = useState("Enable dark mode")
    const tooglestyle = () =>{
        if(mystyles.color == "black" )
        {
         setMyStyle({
                color:"white",
                backgroundColor:"black",
                border:"1px solid white"
            })
         setBtn("Enable light mode")

        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
               })
            setBtn("Enable dark mode")
            }
        }
        console.log('I am About page')
    return(

        <div className="container" style={mystyles}>
            <h1 className="my-3">About</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" style={mystyles}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"style={mystyles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={mystyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"style={mystyles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" onClick={props.toogle} className="accordion-collapse collapse"style={mystyles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong>
      </div>
    </div>
  </div>
</div>
<div className="container my-3" >
<button type="button" className="btn btn-primary" onClick={tooglestyle}>{btn}</button>
</div>
</div>
    );
}