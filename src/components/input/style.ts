import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #fff;
    border: none;
    height: 30px;
    width: 100%;
    padding: 0 10px;
`

export const ErrorText = styled.p`
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 20px;
    color:rgb(228, 2, 2)
`