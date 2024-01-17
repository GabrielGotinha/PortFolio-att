
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar3 from './components/Navbar3';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom'; 


function App() {
  /*let component
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
  }*/

  return (
    <>
      <div className='App'>
      <Navbar3/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
