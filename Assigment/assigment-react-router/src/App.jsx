
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./comps/Navbar"
import Routes from "./comps/Routes"

function App() {


  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  )
}

export default App
