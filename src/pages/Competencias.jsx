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

export default function Competencias () {

    return (
        <>
        <div className="w-screen">
            
               <div className="flex mb-2 mt-2 w-full justify-center flex-col items-center" >
               <h1><span className="badge bg-secondary text-xl">COMPETENCIAS</span></h1>
                    <ul className="list-group list-group-flush shadow-lg rounded-md shadow-[#1C1F23] w-3/5 bg-transparent list-group-item-dark " >
                        <li className="list-group-item font-bold flex justify-between"  >
                            Javascript 
                            <span>
                                <IoLogoJavascript className="text-5xl"/>
                            </span> 
                         
                            
                        </li>

                        <li className="list-group-item font-bold flex justify-between" >Typescript <span><SiTypescript className="text-5xl"/></span>
                       
                        
                        </li>
            
                        <li className="list-group-item font-bold flex justify-between " >HTML5, CSS3 <span><FaHtml5 className="text-5xl"/></span> <span><FaCss3Alt className="text-5xl"/></span>
                         
                         
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >React.js <span><FaReact  className="text-5xl"/></span> 
                        
                        
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Git, GitHub <span><FaGithub className="text-5xl"/></span>
                         
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Redux <span><SiRedux className="text-5xl"/></span>
                        
                         
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Bootstrap <span><FaBootstrap className="text-5xl"/></span> 
                         </li>
                        <li className="list-group-item font-bold flex justify-between" >TailwindCSS <span><SiTailwindcss className="text-5xl"/></span> 
                        </li>
                        <li className="list-group-item font-bold flex justify-between" >Node.js <span><FaNodeJs className="text-5xl"/></span> 
                        </li>
                    </ul>
               </div>
        </div>
           <Footer/>
        </>
    )
}