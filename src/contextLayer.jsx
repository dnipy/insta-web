import { useState } from "react";
import App from "./App";
import { userContext } from "./helper/context";

export default function ContexLayer () {
    const [isSigned,setIsSigned] = useState(true)
    // const [userName,setUserName] = useState("")


    return(
        <userContext.Provider value={[isSigned,setIsSigned]}>
            <App/>
        </userContext.Provider>
    )
}

