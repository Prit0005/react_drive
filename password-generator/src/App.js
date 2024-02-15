
import { useState } from 'react';
import './App.css';
import { LW, UP, NM, SY } from './data';

function App() {
  let [up, setup] = useState(false);
  let [lw, setlw] = useState(false);
  let [num, setnum] = useState(false);
  let [sy, setsy] = useState(false);
  let [length, setlength] = useState(8);
  let [visible, setvisible] = useState('');

  let generate = () => {
    let finalpass=''
    let char = ''
    if (up || lw || num || sy) {
      if (up) char += UP;
      if (lw) char += LW;
      if (num) char += NM;
      if (sy) char += SY;
      

      for(let i=0;i<length;i++){
        finalpass+=char.charAt(Math.floor(Math.random()*char.length))
      }
      setvisible(finalpass)


    } else {
      alert("select one checkbox")
    }
  }

  let copypass=()=>{
    navigator.clipboard.writeText(visible)
  }

  return (
    <div className="App">
      <div className='cointner'>
        <div className='box'>
          <h2>Password Generator</h2>
          <div className='passbox'>
            <input type='text' value={visible} readOnly></input><button onClick={copypass}>Copy</button>
          </div>
          <div className='length'>
            <label>Password Length</label>
            <input type='number' min={8} max={25} value={length} onChange={(event) => { setlength(event.target.value) }}></input>
          </div>
          <div className='checkbox'>
            <label>Uppercase Later  </label>
            <input type='checkbox' checked={up} onChange={() => setup(!up)} ></input>
          </div>
          <div className='checkbox'>
            <label>Lowercase Later  </label>
            <input type='checkbox' checked={lw} onChange={() => setlw(!lw)} ></input>
          </div>
          <div className='checkbox'>
            <label>Numerical</label>
            <input type='checkbox' checked={num} onChange={() => setnum(!num)} ></input>
          </div>
          <div className='checkbox'>
            <label>Special Symbol  </label>
            <input type='checkbox' checked={sy} onChange={() => setsy(!sy)} ></input>
          </div>
          <button className='btn' onClick={generate}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
