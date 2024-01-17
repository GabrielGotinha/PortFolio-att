import Eu from '../images/eu.jpg'
import Card from 'react-bootstrap/Card';

export default function Contato () {
    return (
        <>
            <div className='ml-28 mt-24 flex justify-between '>
                <picture>
                    <img src={Eu} className='w-52  rounded-full' alt="minha foto" />
                </picture>
                <Card className='mr-28 flex flex-col' bg='dark' data-bs-theme="dark" >
                    <Card.Body>
                        <Card.Title>Email</Card.Title>
                        <Card.Text>
                        gaemail142@gmail.com
                        </Card.Text>
                        <Card.Title> -----------------------</Card.Title>
                        <Card.Title>Numero</Card.Title>
                        <Card.Text>
                        (62)982662027
                        </Card.Text>
                        <Card.Title> -----------------------</Card.Title>
                        <Card.Text>Veja também meu perfil no </Card.Text>
                        <Card.Text><a href='https://www.linkedin.com/in/gabriel-angello'>Linkedin</a></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}