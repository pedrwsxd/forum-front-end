import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%
    height: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    heigth: 100%;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: #fff;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFF;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: #fff;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
    }
`