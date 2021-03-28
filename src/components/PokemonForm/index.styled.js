import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin: 15px 0;
    }

    input {
        height: 40px;
    }

    button {
        width: 25%;
        min-width: 200px;
        background: var(--color-pokemon);
        border: none;
        font-size: 1.3rem;
        color: white;
        border-radius: 100px;
        height: 50px;
        padding: 0 10px;
        transition: all 0.2s ease;
    }

    button:hover {
        transform: scale(1.1);
        background: #c2c;
    }

    .input-section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    textarea, input {
        margin: 5px;
        box-shadow: 8px 10px 23px -2px rgba(0,0,0,0.2);
        border: none;
        border-radius: 20px;
        padding: 5px;
        font-size: 1rem;
    }

    label {
        font-size: 1.2rem;
    }
`;