import Navbar2 from "./components/Navbar2"
import Contato from "./pages/Contato"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Competencias from "./pages/Competencias"

function App() {
  let component
  switch(window.location.pathname) {
    case '/':
      component = <Home/>
      break
    case '/Contato':
      component = <Contato/>
      break
    case '/Competencias':
      component = <Competencias/>
      break
  }

  return (
    <>
      <Navbar2/>
      {component}
    </>
  )
}

export default App
