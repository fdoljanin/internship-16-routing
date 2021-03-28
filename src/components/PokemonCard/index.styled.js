import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    border-radius: 20px;
    padding: 20px;
    margin: 25px;
    cursor: pointer;
    box-shadow: 15px 10px 34px -13px #884488;

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