import logo from './logo.svg';
import './App.css';

function App() {
  const Cal =(valu)=>{
    let get_val = document.getElementById("hello").value += valu
    console.log(get_val);
}
// end 
// result 
const Result =()=>{
  let x =  document.getElementById("hello").value
  let b = eval(x)
  document.getElementById("hello").value= b
}
// end 
// clear 
const Clear =()=>{
document.getElementById("he").value=''
}
const Del=()=>{
    let dlt = document.getElementById("he").value
    document.getElementById("he").value=dlt.slice(0,-1)
}
  return (
    <div className="App">
 <div class="container">
        {/* <div id="change">
            <button id="togle"><i className="fa-solid fa-toggle-off"></i></button>
        </div> */}
        <div className="second-container">
            <input type="text" id="hello" className="input" placeholder="0" name="display" />
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
