import styled from 'styled-components';

export const Pokemon = styled.section`
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
        color: var(--color-pokemon);
    }

    p {
        font-size: 1.2rem;
        text-align: justify;
        margin: 10px 0;
    }
`;