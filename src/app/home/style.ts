import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

`

export const TitleHighlight = styled.span`
    color: #E4105D;
`
export const TitleContent = styled.p`
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
`