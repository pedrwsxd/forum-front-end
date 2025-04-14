import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;  

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: white;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 47px;
    background-color: #282c34;
    `;

export const BuscarInputContainer = styled.div `
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const Menu = styled.a`
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin-right: 12px;
    `

export const MenuRight = styled.a`
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    margin-right: 12px;
    `

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFF;
    margin-right: 12px;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border 0;
    color: #FFF;
    padding: 6px 5px;
    border-radius: 8px;
    `

export const ButtonSingOut = styled.button`
    text-decoration: none;
    width: 50px;
    padding: 3px 5px;
    color: #FFF;
    background: none;
`
