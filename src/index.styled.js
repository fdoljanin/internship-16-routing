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