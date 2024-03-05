import { useState } from 'react'
import './weather.css'

function App() {
  let [city,setcity]=useState('')
  let getdata=(event)=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}')
    .then((res)=>res.json())
    .then((final)=>{
      console.log(final);
    })


    event.preventDefault()
    setcity('')
  }


  return (
    <>
      <div className="cointner">

        <div className="box">

          <h2>Weather</h2>

          <div className="input">
            <form onSubmit={getdata} >
              <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} name="" id="" />
              <button>search</button>
            </form>
          </div>
           
          <p>Ahmedabad</p>
          <p>Country</p>
          <p>Temperature</p>
        </div>
      </div>
    </>
  )
}

export default App
