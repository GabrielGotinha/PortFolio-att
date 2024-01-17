import { IoLogoJavascript } from "react-icons/io5";

export default function Competencias () {
    return (
        <>
        
           <div className="mt-6 flex justify-center flex-col items-center" > 
           <h1><span className="badge bg-secondary text-xl">COMPETENCIAS</span></h1>
                <ul className="list-group list-group-flush shadow-lg rounded-md shadow-[#1C1F23] w-3/5 bg-transparent list-group-item-dark " >
                    <li className="list-group-item font-bold flex justify-between" >Javascript <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >HTML5, CSS3 <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >React.js <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >Git, GitHub <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >Redux <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >Bootstrap <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >TailwindCSS <span><IoLogoJavascript className="text-5xl"/></span> </li>
                    <li className="list-group-item font-bold flex justify-between" >Node.js <span><IoLogoJavascript className="text-5xl"/></span> </li>
                </ul>
           </div>
        </>
    )
}