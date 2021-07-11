import { init } from 'ityped'
import { useEffect, useRef} from 'react'
import "./intro.scss"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
             showCursor: true, 
             backDelay:1500,
             backSpeed:60,
             strings: ['Developer', 'Designer','Content Creator' ] })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="asset/man4.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'am</h2>
                    <h1>Jonathan Seneza</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portifolio">
                    <img src="asset/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
