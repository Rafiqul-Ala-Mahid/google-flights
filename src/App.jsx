import Cities from "./components/Cities"
import FlightForm from "./components/FlightFrom"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <FlightForm></FlightForm>
      <Cities></Cities>
      <Footer></Footer>
    </div>
  )
}

export default App
