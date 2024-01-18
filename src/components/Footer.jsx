import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer () {
    return (
        <>
        <div className=" mt-9">
            
            <footer bg="dark" data-bs-theme="dark" className="h-16  bg-body-tertiary">
                
                    <div className="gap-2" style={{display:'flex', justifyContent: 'center'}}>
                    <a className="text-white text-3xl mt-3" href="https://github.com/GabrielGotinha" target='_blank'><FaGithub /></a>
                        <a className="text-white text-3xl mt-3" href="www.linkedin.com/in/gabriel-angello" target='_blank'><FaLinkedin /></a>
                    </div>
            </footer>
        </div>
        </>
    )
}