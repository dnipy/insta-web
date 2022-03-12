import { useState } from "react"
import instaIcon from '../assets/instaICON.jpg'
import post1 from '../assets/post1.jpeg'

export default function POSTS () {
    const  [MoreThanOne, setMoreThanOne] = useState(false)
    return(
        <div className="post">
            <div className="info-post row">
                <div className="col-2" >
                    <img src={instaIcon} alt="" width={50} height={50} style={{ marginLeft:'10px',margin: '10px' , borderRadius : "50%"}} />  
                </div>
                <div className="col-9 al-cen ">
                    <h4>
                        dnipy
                    </h4>
                </div>
                <div className="col-1 al-cen ">
                    <h2 >
                    <   i class="bi bi-three-dots"></i>
                    </h2>
                </div>
            </div>
            <div className="img-post mt-2">
                <img src={post1} alt="" width='100%' height='auto' />  
            </div>
            <div className="desc-post">
                <div className="mt-4 row">
                    <div>
                        1  
                    </div>    
                    <div>
                        2 
                    </div>    
                    <div>
                        3   
                    </div>    
                </div>
            </div>

        </div>
    )
}