import styled from "styled-components";

export const NotFoundWrapper = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    img {
        position: absolute;
        bottom: 0;
        width: 400px;
        animation: grayOut 5s forwards;
    }

    h1 {
        font-size: 10rem;
        animation: fallDown 3s ease-in 5s forwards;
        z-index: 1;
    }

    p {
        font-size: 1.5rem;
    }

    a {
        color: black;
    }

    @keyframes grayOut {
        0% {
        }
        100% {
            filter: grayscale(100%);
        }
    }

    @keyframes fallDown {
        0% {

        }
        100% {
            transform: translateY(140vh) rotateZ(140deg);
        }
    }
`