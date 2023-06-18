import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
    padding-left: 30px;
`;

export const Item = styled.li`
    padding-left: 5px;
    font-size: 17px;
`;  

export const Text = styled.p`
    display: inline-block;
    min-width: 200px;
    font-family: cursive;
    
`;

export const Button = styled.button`
    width: 80px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-left: 40px;
    border: 2px solid #20B2AA;
    border-radius: 7px;
    cursor: pointer;
    font-family: cursive;
    background-color: transparent;
    transition: background-color 0.2s cubic-bezier(0.21, 0.85, 0.46, 0.23) 0s;

    &:hover,
    &:focus {
    background-color: #20B2AA;
    }
`;

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #333;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-bottom: 20px;
    margin-left: 70px;

    animation: ${spin} 1s ease-in-out infinite;
`;