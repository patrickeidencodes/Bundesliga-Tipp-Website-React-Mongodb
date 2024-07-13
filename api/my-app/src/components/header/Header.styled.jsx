import styled from "styled-components";

//Container
export const Container1 = styled.div`
    @media (max-width: 768px) {
        
    }
    position: fixed;
    width: 100%;
    padding: 15px;
    background-image: linear-gradient(white, transparent);
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
`
export const Container2 = styled.div`
    @media (max-width: 768px) {
        justify-content: center;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Container3 = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    display: flex;
    justify-content: space-between;
    position: relative;
`
export const Container3Logo = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    display: flex;
`
export const Container3Burger = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #000e14;
        width: 100%;
        position: absolute;
        margin-top: 20px;
        padding: 5px;
    }
    display: none;
`

//Inhalte
export const H3nav = styled.h3`
    display: flex;
    position: relative;
    margin: 0px 20px;
`

export const Logo = styled.div`
    @media (max-width: 768px) {
        display: flex;
    }
    display: none;
`
export const Burger = styled.div`
    @media (max-width: 768px) {
        display: flex;
    }
    display: none;
`