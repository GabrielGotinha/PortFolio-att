import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { CiMenuKebab } from "react-icons/ci";

export default function Competencias () {
    function handleclick () {
        if(menu.style.display == 'block'){
            menu.style.display = 'none'
        }else{
            menu.style.display = 'block'
        }
    }
    function handleclick2 () {
        if(menu2.style.display == 'block'){
            menu2.style.display = 'none'
        }else{
            menu2.style.display = 'block'
        }
    }
    function handleclick3 () {
        if(menu3.style.display == 'block'){
            menu3.style.display = 'none'
        }else{
            menu3.style.display = 'block'
        }
    }
    function handleclick4 () {
        if(menu4.style.display == 'block'){
            menu4.style.display = 'none'
        }else{
            menu4.style.display = 'block'
        }
    }

    return (
        <>
        <div className="w-screen">
            
               <div className="flex mb-2 mt-2 justify-center flex-col items-center" >
               <h1><span className="badge bg-secondary text-xl">COMPETENCIAS</span></h1>
                    <ul className="list-group list-group-flush shadow-lg rounded-md shadow-[#1C1F23] w-3/5 bg-transparent list-group-item-dark " >
                        <li className="list-group-item font-bold flex justify-between"  >
                            Javascript 
                            <span>
                                <IoLogoJavascript className="text-5xl"/>
                            </span> 
                            <CiMenuKebab className="text-3xl mt-2" onClick={handleclick} /> 
                            <span id="menu" className="flex flex-grow" style={{display: 'none'}}>Linguagem de programação, tenho 7 meses de experiencia</span> 
                        </li>

                        <li className="list-group-item font-bold flex justify-between" >Typescript <span><SiTypescript className="text-5xl"/></span>
                        <CiMenuKebab className="text-3xl mt-2"/> 
                        
                        </li>
            
                        <li className="list-group-item font-bold flex justify-between " >HTML5, CSS3 <span><FaHtml5 className="text-5xl"/></span> <span><FaCss3Alt className="text-5xl"/></span>
                        <CiMenuKebab className="text-3xl mt-2" onClick={handleclick2} /> 
                        <span id="menu2" className="flex flex-grow" style={{display: 'none'}}>Linguagem de marcação, tenho 8 meses de experiência</span> 
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >React.js <span><FaReact  className="text-5xl"/></span> 
                        <CiMenuKebab className="text-3xl mt-2" onClick={handleclick3} /> 
                        <span id="menu3" className="flex flex-grow" style={{display: 'none'}}>Biblioteca JS, tenho 6 meses de experiência</span> 
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Git, GitHub <span><FaGithub className="text-5xl"/></span>
                        <CiMenuKebab className="text-3xl mt-2" /> 
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Redux <span><SiRedux className="text-5xl"/></span>
                        <CiMenuKebab className="text-3xl mt-2" onClick={handleclick4} /> 
                        <span id="menu4" className="flex flex-grow" style={{display: 'none'}}>Framework, veja projetos com redux no meu github</span> 
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Bootstrap <span><FaBootstrap className="text-5xl"/></span> 
                        <CiMenuKebab className="text-3xl mt-2" /> </li>
                        <li className="list-group-item font-bold flex justify-between" >TailwindCSS <span><SiTailwindcss className="text-5xl"/></span> 
                        <CiMenuKebab className="text-3xl mt-2"  /> </li>
                        <li className="list-group-item font-bold flex justify-between" >Node.js <span><FaNodeJs className="text-5xl"/></span> 
                        <CiMenuKebab className="text-3xl mt-2" /> </li>
                    </ul>
               </div>
        </div>
           <Footer/>
        </>
    )
}