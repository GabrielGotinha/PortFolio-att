import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaDroplet } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Navbar3 () {
    return (
      
      <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary shadow-xl" styles>
      <Container>
        <Navbar.Brand href="/"><FaDroplet /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Link to="/"><Nav className='text-gray-400 mt-2 font-semibold'>Home</Nav></Link>
            <Link to="competencias"><Nav className='text-gray-400 mt-2 font-semibold'>Competencias</Nav></Link>
            <Link to="contato"><Nav className='text-gray-400 mt-2 font-semibold'>Contato</Nav></Link>
            <NavDropdown title="Sobre" className='font-semibold' id="basic-nav-dropdown">
             
              <NavDropdown.Item href="https://www.linkedin.com/in/gabriel-angello" target='_blank'>
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/GabrielGotinha" target='_blank'>GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <div>
       <footer>
       <nav bg="dark" data-bs-theme="dark" className="navbar  fixed-bottom bg-body-tertiary">
  <div className="container-fluid" style={{display:'flex', justifyContent: 'center'}}>
    <a className="navbar-brand " href="https://github.com/GabrielGotinha" target='_blank'><FaGithub /></a>
    <a className="navbar-brand " href="www.linkedin.com/in/gabriel-angello" target='_blank'><FaLinkedin /></a>
  </div>
</nav>
       </footer>
      </div>

      </div>
    )
}