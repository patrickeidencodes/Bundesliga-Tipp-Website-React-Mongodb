// @ts-nocheck
import styled from "styled-components";

export const Body1 = styled.div`
    position: relative;
    top: 0;
    height: 100vh;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: 0px 0px, 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Body2 = styled.div`
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 50px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 50%;
    max-width: 600px;
    background-color: #101416;
    height: auto;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const Input1 = styled.input`
    @media (max-width: 768px) {
        width: 60%;
    }
    width: 40%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    background-color: white;
    border-radius: 20px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    &:focus {
        outline: none;
    }
`

export const Loginh1 = styled.h1`
    margin-top: 40px;
    color: white;
    margin-bottom: 20px;
`
export const Loginh3 = styled.h3`
    @media (max-width: 768px) {
        margin-top: 0px;
    }
    margin-top: 40px;
    color: white;
    margin-bottom: 20px;
`

export const Loginbutton = styled.button`
    @media (max-width: 768px) {
        width: 60%;
    }
    width: 40%;
    color: white;
    background-image: linear-gradient(to right,red, yellow);
    border: none;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    cursor:'pointer';
    &:hover {
        color: black;
    }
`
export const Text = styled.div`
    @media (max-width: 768px) {
        width: 80%;
    }
    width: 45%;
    color: white;
    margin-left: auto;
    margin-right: auto;
`