import "./testmonials.scss"

export default function Testmonials() {
    
    const info = [

        {
            id:"1",
            name:"Jules Rutayisire ",
            title:"CEO Of RGMI",
            img:"./asset/testimonial/jules.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
            icon:"./asset/youtube.png",
            
        },
        {
            id:"2",
            name:"Rucaca Rwigema",
            title:"CEO Of PMT",
            img:"./asset/testimonial/rucaca.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon:"./asset/twitter-sign.png",
            featured:true,
        },
        {
            id:"3",
            name:"christian Nkusi",
            title:"Developer",
            img:"./asset/testimonial/christian.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon:"./asset/linkedin.png",
        },
        
    ];

    return(

        <div className="testmonials" id="testmonials">
            <h1>Testimonials</h1>
            <div className="container">
                {info.map((p)=> (
                    <div className={p.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="asset/right.png" className="left" alt="" />
                            <img src={p.img} className="user" alt="" />
                            <img src={p.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            {p.desc}  
                        </div>
                        <div className="bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    );
}
