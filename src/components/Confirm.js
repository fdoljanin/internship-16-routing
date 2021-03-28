import {ConfirmPopup} from "../index.styled";

const Confirm = ({text, accept, cancel}) => {
    return (
        <ConfirmPopup>
            <section>
                <h4>{text}</h4>
                <div className="options">
                    <button className="button-confirm" onClick={accept}>Yes</button>
                    <button className="button-cancel" onClick={cancel}>Cancel</button>
                </div>
            </section>
        </ConfirmPopup>
    )
}

export default Confirm;