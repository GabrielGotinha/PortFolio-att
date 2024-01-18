import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'


export default function Projetos () {

    function handlemenu () {
        if(menu.style.display == 'grid'){
            menu.style.display = 'none'
        }else{
            menu.style.display = 'grid'
        }
    }

    return(
        <>
            <div className='grid grid-flow-col content-around grid-rows-6 gap-8 w-screen m-auto pt-10 md:grid-rows-2' >
            <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
        <Button variant="secondary">EM BREVE</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
        <Button variant="secondary">EM BREVE</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">EM BREVE</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>    
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE.
        </Card.Text>
        <Button variant="secondary">EM BREVE</Button>
      </Card.Body>
    </Card>

            </div>
            <div className='flex justify-center mt-6'><Button variant="dark" onClick={handlemenu}>Ver mais</Button></div>

        <div id='menu' style={{display: 'none'}} className='grid-flow-col content-around  gap-2 mt-10 grid-rows-3 w-screen md:grid-rows-1 '>
        <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

        <Footer/>
        </>
    )
}