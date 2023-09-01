// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  let [inti ,setinit]= useState("")
  function push(e){
    setinit(inti.concat(e.target.value))

  }
    return (
    <div className="App">
 <div class="container">
        {/* <div id="change">
            <button id="togle"><i className="fa-solid fa-toggle-off"></i></button>
        </div> */}
        <div className="second-container">
            <input type="text" id="input" className="input" placeholder="0" name="display" />
           <div className="mar">
            <div className="cen">
             <button className="button" id="h" onClick={Cal('7')}>7</button>
             <button className="button"  id="h" onClick={Cal('8')}>8</button>
             <button className="button"  id="h" onClick={Cal('9')}>9</button>
             <button className="button" id="col" onClick={Cal('/')}>/</button>
            </div>
            <div className="cen">
                <button className="button" onClick={Cal('4')}>4</button>
                <button className="button" onClick={Cal('5')}>5</button>
                <button className="button" onClick={Cal('6')}>6</button>
                <button className="button" id="col" onClick={Cal('*')}>X</button>
               </div>
               <div className="cen">
                <button className="button" onClick={Cal('1')}>1</button>
                <button className="button" onClick={Cal('2')}>2</button>
                <button className="button" onClick={Cal('3')}>3</button>
                <button className="button" id="col" onClick={Cal('-')}>-</button>
               </div>
               <div className="cen">
                <button className="button" onClick={Cal('.')}>.</button>
                <button className="button" onClick={Cal('0')}>0</button>
                <button className="button" onClick={Cal('+')}>+</button>
                <button className="button C" onClick={Clear('')}>C</button>
               </div>
               <div className="cen">
                <button className="dlt" onClick={Del('')}>DEl</button>
                <button className="equal" onClick={Result('=')}>=</button>
               </div>
               </div>
        </div>
    </div>
    </div>
  );
}

export default App;
