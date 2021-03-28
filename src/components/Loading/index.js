import { useEffect, useState } from "react";
import loadingBall from "../../assets/loading-ball.png";
import {LoadScreen} from "./index.styles";


const Loading = () => {
    const [loadingText, setLoadingText] = useState("Loading");
    const [numberOfDots, setNumberOfDots] = useState(3);

    const changeLoadingText = () => {
        setNumberOfDots(prev => (prev + 1) % 4);
        setLoadingText("Loading" + ".".repeat(numberOfDots));
    }
    useEffect(() => setTimeout(changeLoadingText, 500), [numberOfDots]);

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