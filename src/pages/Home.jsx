import { Button } from 'react-bootstrap'
import Cardcont from '../components/Cardcont'
import { MaquinaDeEscrever } from '../components/EfeitoTy'
import Footer from '../components/Footer'



export default function Home () {
    const onButtonClick = () => {
        const pdfUrl = "/CurriculoAtt.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CurriculoAtt.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        
        <>
            <main className='m-10  grid grid-rows-2 '>
                <div className='flex justify-center '>
                    
                        <h1><span className='py-4 text-5xl  text-gray-200 font-bold' >
                            <MaquinaDeEscrever text="Olá, sou o Gabriel Angello"/>
                                
                        </span> </h1>
                    
                </div>
                
                <div className='flex justify-center'><Cardcont/></div>
                <div className='flex justify-center mt-10'>
                
                    <Button variant="secondary" href='https://docs.google.com/document/d/1We2gl_jNNO-_MsffxhqTUTbL_0GyayqcU_3t9zUj3AY/edit?usp=sharing'>Curriculo</Button>
                </div>
    
                

            </main>
            <div className='fixed-bottom'><Footer/></div>
        </>
    )
}