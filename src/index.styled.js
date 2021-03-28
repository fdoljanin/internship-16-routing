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

export const MainScreen = styled.main`
  position: relative;
  display: flex;
  
  section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    font-size: 1.8rem;
    font-weight: 600;
    min-width: 24%;
    padding: 12px 12px;
    border-radius: 20px;
    border: none;
    background: white;
    margin-top: 150px;
    box-shadow:  8px 11px 12px 5px  #55555555;
  }
  
  button:hover {
      animation: pulse 4s infinite ease-in-out;
  }
  
  @keyframes pulse {
      0% {
          transform: scale(1.0);
      }
      10% {
          transform: scale(1.2);
      }
      25% {
          transform: scale(0.9);
      }
      40% {
          transform: scale(1.0);
      }
  }
  
  .pokemon button {
      color: var(--color-pokemon);
  }
  
  .digimon button {
      color: var(--color-digimon);
  }
  
  .pokemon {
    background: var(--color-pokemon);
  }
  
  .digimon {
    background: var(--color-digimon);
  }
  
  h1 {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 20px;
    font-size: 4rem;
    color: white;
    right: 0.3ch;
  }
  
  img {
    width: 300px;
  }
  
  .pokemon img{
      margin-top: 60px;
  }
  
  .digimon img {
      margin-top: 20px;
  }
`;

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
`;

export const FormWrapper = styled.div`
    width: 60%;
    display: flex;
    margin: auto;
    margin-top: 30px;
    flex-direction: column;
    align-content: center;


    h2 {
        font-size: 2.5rem;
        text-align: center;
    }
`;

export const Card = styled.article`
    display: flex;
    border-radius: 20px;
    padding: 20px;
    margin: 25px;
    cursor: pointer;
    box-shadow: 15px 10px 34px -13px ${props => props.type === "pokemon" ? 'var(--color-pokemon)':'var(--color-digimon)' };;

    h3, span {
        font-weight: 600;
        font-size: 1.3rem;
        margin-right: 20px;
    }

    span {
        color: #bbb;
    }

    &:hover {
        animation: float 2s infinite linear;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(5px);
        }
        75% {
            transform: translateY(-5px);
        }
        100%{
            transform: translateY(0);
        }
    }
`;

export const DetailsWrapper = styled.section`
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    box-shadow: 15px 10px 90px -38px rgba(0,0,0,0.3);
    border-radius: 30px;
    padding: 10px 30px 20px 30px;

    h2{
        font-size: 3rem;
        color: ${props => props.type === "pokemon" ? 'var(--color-pokemon)':'var(--color-digimon)' };
    }

    p {
        font-size: 1.2rem;
        text-align: justify;
        margin: 10px 0;
    }


    button {
        margin-top: 10px;
        background: ${props => props.type === "pokemon" ? 'var(--color-pokemon)':'var(--color-digimon)' };
        width: 120px;
        border: none;
        font-size: 1.2rem;
        color: white;
        border-radius: 100px;
        height: 40px;
        padding: 0 20px;
        transition: all 0.2s ease;
    }

    .button-delete {
        background: #911;
    }
`;

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
        background: ${props => props.type === "pokemon" ? 'var(--color-pokemon)':'var(--color-digimon)' };
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
        background: ${props => props.type === "pokemon" ? 'var(--color-pokemon)':'var(--color-digimon)' };
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
    }

`;