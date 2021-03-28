import { useEffect, useState } from "react";
import loadingBall from "../assets/loading-ball.png";
import {LoadScreen} from "../index.styled";


const Loading = () => {
    const [loadingText, setLoadingText] = useState("Loading");
    const [numberOfDots, setNumberOfDots] = useState(0);
    let timeout;

    const changeLoadingText = () => {
        setNumberOfDots(prev => (prev + 1) % 4);
        setLoadingText("Loading" + ".".repeat(numberOfDots));
    }
    
   useEffect(() => {
       timeout = setTimeout(changeLoadingText, 500);
   }, [numberOfDots]);

   useEffect(() =>{
        return () => clearTimeout(timeout);
   }, [])

    return (
        <LoadScreen>
            <div>
                <h2>{loadingText}</h2>
                <img src={loadingBall} alt="Loading pokemon ball" />
            </div>
        </LoadScreen> 
    )


}

export default Loading;