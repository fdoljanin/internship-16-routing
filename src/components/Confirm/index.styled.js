import styled from "styled-components";

export const ConfirmPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #00000055;

    section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 20px;
        padding: 30px;
    }
    h4 {
        font-size: 1.5rem;
    }

    .options {
        display: flex;
        justify-content: space-between;
    }

    .button-confirm {
        background: #911;
    }

    .button-cancel {
        background: grey;
    }
`;