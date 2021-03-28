import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 700px;
    }
    section {
        width: 450px;
        overflow-y: scroll;
        height: 80vh;
    }

    button {
        margin-top: 100px;
        background: var(--color-pokemon);
        border: none;
        font-size: 1.3rem;
        color: white;
        border-radius: 100px;
        height: 60px;
        padding: 0 20px;
        transition: all 0.2s ease;
    }

    button:hover {
        transform: scale(1.1);
        background: #c2c;
    }

`;