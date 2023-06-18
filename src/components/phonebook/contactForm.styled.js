import styled from 'styled-components';

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding: 15px;
    margin-bottom: 30px;
    border: 2px solid #20B2AA;
    border-radius: 4px;
    align-items: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 23px;
    align-items: center;
    font-family: cursive;
`;

export const Input = styled.input`
    width: 250px;
    min-height: 20px;
    border: 2px solid #20B2AA;
    border-radius: 7px;
    font-family: cursive;
`;

export const SubmitButton = styled.button`
    width: 100px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 10px;
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