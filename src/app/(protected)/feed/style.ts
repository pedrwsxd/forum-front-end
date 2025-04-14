import styled from "styled-components";
import { IColumn } from "./types";

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

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    width: 320px;
    line-height: 25px;

`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    color:rgba(255, 255, 247, 0.43);
    line-height: 25px;
    margin-bottom: 24px;
`

export const Column = styled.div<IColumn>`
    flex:${({flex}) => flex};
    padding-right: 24px;
`