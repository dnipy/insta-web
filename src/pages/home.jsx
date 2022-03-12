import { useContext } from "react";
import Navbar from "../components/navbar";
import POSTS from "../components/posts";
import { Side } from "../components/Side";
import Stories from "../components/story";
import { userContext } from "../helper/context";

export default function Home () {
    const [isSinged , setIsSigned] = useContext(userContext)


    if (isSinged) {
        return(
            <div >
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ">
                            <Stories/>
                            <div className="posts">
                                <POSTS/>
                            </div>
                        </div>
                        <div className="col-5 d-none d-lg-block">
                            <Side/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                you should login
                <button onClick={ ()=>setIsSigned(true)} >login</button>
            </div>
        )
    }
    
}

