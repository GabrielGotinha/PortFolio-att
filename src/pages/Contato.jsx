import Eu from '../images/eu.jpeg'
import Card from 'react-bootstrap/Card';

export default function Contato () {
    return (
        <>
            <div className=' mt-24 grid grid-cols-1 md:grid-cols-2 '>
                <picture>
                    <img src={Eu} className='w-44  rounded-full' alt="minha foto" />
                </picture>
                <Card className=' flex flex-col' bg='dark' data-bs-theme="dark" >
                    <Card.Body>
                        <Card.Title>Email</Card.Title>
                        <Card.Text>
                        gaemail142@gmail.com
                        </Card.Text>
                        <Card.Title> -----------------------</Card.Title>
                        <Card.Title>Numero</Card.Title>
                        <Card.Text>
                        (62)982150617
                        </Card.Text>
                        <Card.Title> -----------------------</Card.Title>
                        <Card.Text>Veja também meu perfil no </Card.Text>
                        <Card.Text><a href='https://www.linkedin.com/in/gabriel-angello' style={{color: 'rgb(50, 69, 243)'}} className='underline'>Linkedin</a></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}