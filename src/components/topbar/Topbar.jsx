import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+250 782 308 981</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>senezachrisjonathan@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamb" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}