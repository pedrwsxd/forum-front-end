import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`

export const Wrapper = styled.div `
    max-width: 300px;
`

export const Column = styled.div `
    flex: 1;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    width: 350px;
    margin-bottom: 20px;
    line-height: 44px;

`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    width: 340px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleRegister = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 35px;
    line-height: 25px;
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 700;
    color: #FFF;

`

export const LogarText = styled.span`
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 700;
    margin-left: 7px;
    color: #23DD7A;

    &&:hover {
        cursor: pointer;
    }
`

