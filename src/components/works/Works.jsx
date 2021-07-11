import { useState } from "react";
import "./works.scss"

export default function Works() {
    const[currentSlide, setCurrentSlide] = useState(0)

    const data = [

        {
            id:"1",
            icon:"./asset/globe.png",
            title:"Web Design",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"./asset/blog.PNG"
        },
        {
            id:"2",
            icon:"./asset/mobile-phone.png",
            title:"Mobile Application",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"./asset/mobileapp.PNG"
        },
        {
            id:"3",
            icon:"./asset/writting.png",
            title:"Branding",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"./asset/brand.png"
        },
    ];

    const handleClick= (way)=>{
        way==="left" 
        ? setCurrentSlide (currentSlide > 0 ? currentSlide -1 : 2) 
        : setCurrentSlide (currentSlide < data.length -1 ? currentSlide +1 : 0) 

    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d)=> (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <img src="asset/right.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="asset/right.png" className="arrow right" alt="" onClick={()=>handleClick("")}/>
        </div>
    );
    }