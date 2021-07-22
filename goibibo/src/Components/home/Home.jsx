import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
   
    useEffect(() => {
        history.push("/bus") 
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Home
