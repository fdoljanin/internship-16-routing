import styled from "styled-components";

export const LoadScreen = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
     h2 {
        font-size: 3rem;
        width: 100px;
     }
     img {
         width: 150px;
         animation: rotation 2s infinite;
     }

     @keyframes rotation {
         0% {
             transform: rotateZ(0deg);
         }
         25% {
             transform: rotateZ(180deg);
         }
         50% {
             transform: rotateZ(180deg);
         }
         75% {
             transform: rotateZ(360deg);
         }
         100% {
             transform: rotateZ(360deg);
         }


     }
`;