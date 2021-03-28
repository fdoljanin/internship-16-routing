import pikachu404 from "../../assets/404-pikachu.png";
import {NotFoundWrapper} from "./index.styled";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <h1>404</h1>
            <div class="message">
                <p>Nothing to see here.</p>
                <Link to="/">
                    <p>Click here to return</p>
                </Link>
            </div>
            <img src={pikachu404} alt="Shocked face" />
        </NotFoundWrapper>
    )
};

export default NotFound;