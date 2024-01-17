import Cardcont from '../components/Cardcont'
import { MaquinaDeEscrever } from '../components/EfeitoTy'

export default function Home () {
    return (
        <>
            <main className='m-10  grid grid-rows-2 '>
                <div className='flex justify-center '>
                    
                        <h1><span className='py-4 text-5xl  text-gray-200 font-bold' >
                            <MaquinaDeEscrever text="Olá, sou o Gabriel Angello"/>
                                
                        </span> </h1>
                    
                </div>
                
                <div className='flex justify-center'><Cardcont/></div>
                    
                
            </main>
        </>
    )
}