// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  let [get ,set]= useState("")
  function Cal(e){
    set(get+(e.target.value))
  }
  function Clear(){
    set("")
  }
  function Result(){
    set(eval(get))
  }
  function Del(){
    set(get.slice(0,-1))
  }
    return (
    <div className="App">
 <div class="container">
        {/* <div id="change">
            <button id="togle"><i className="fa-solid fa-toggle-off"></i></button>
        </div> */}
        <div className="second-container">
            <input type="text" id="input" value={get} className="input" placeholder="0" name="display" />
           <div className="mar">
            <div className="cen">
             <button className="button" value={"7"}  id="h" onClick={Cal}>7</button>
             <button className="button" value={"8"}  id="h" onClick={Cal}>8</button>
             <button className="button" value={"9"}  id="h" onClick={Cal}>9</button>
             <button className="button" value={"/"} id="col" onClick={Cal}>/</button>
            </div>
            <div className="cen">
                <button className="button" value={"4"} onClick={Cal}>4</button>
                <button className="button" value={"5"} onClick={Cal}>5</button>
                <button className="button" value={"6"} onClick={Cal}>6</button>
                <button className="button" value={"*"} id="col" onClick={Cal}>X</button>
               </div>
               <div className="cen">
                <button className="button" value={"1"} onClick={Cal}>1</button>
                <button className="button" value={"2"} onClick={Cal}>2</button>
                <button className="button" value={"3"} onClick={Cal}>3</button>
                <button className="button" value={"-"} id="col" onClick={Cal}>-</button>
               </div>
               <div className="cen">
                <button className="button" value={"."} onClick={Cal}>.</button>
                <button className="button" value={"0"} onClick={Cal}>0</button>
                <button className="button" value={"+"} onClick={Cal}>+</button>
                <button className="button C"  onClick={Clear}>C</button>
               </div>
               <div className="cen">
                <button className="dlt"  onClick={Del}>DEl</button>
                <button className="equal" onClick={Result}>=</button>
               </div>
               </div>
        </div>
    </div>
    </div>
  );
}

export default App;
