// @ts-nocheck
import styled from "styled-components";

export const Body1 = styled.div`
    position: relative;
    top: 0;
    height: 100vh;
    background-image: linear-gradient(360deg, #222, rgba(34, 34, 34, 0)), url(${(props) => props.img});
    background-size: cover;
    background-position: 0px 0px, 50% 50%;
    position: relative;
    z-index: 0;
    margin: auto;
`
export const Bodyrest = styled.div`
    @media (max-width: 768px) {
        height: 4500px;
    }
    height: 4000px;
    background-color: #000e14;
`
export const BodyWMrest = styled.div`
    @media (max-width: 768px) {
        height: 5000px;
    }
    height: 6000px;
    background-color: #000e14;
`
export const Bodyrest2 = styled.div`
    flex: 1 1 auto;
`
export const Body2 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Bodyh1 = styled.h1`
    @media (max-width: 768px) {
        font-size: 50px;
        text-align: center;
    }
    color: whitesmoke;
    font-size: 100px;
`
export const Bodybutton = styled.button`
    padding: 10px 25px;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    background-color: #C53939;
    font-size: 40px;
    color: white;
    &:hover {
        color: #C53939;
        cursor: pointer;
        transform: scale(1.1);
        background-color: white;
    }
`
export const Bodybuttonwh = styled.button`
    width: 100%;
    padding: 10px 25px;
    border: none;
    background-color: #C53939;
    font-size: 40px;
    color: white;
    border-radius: 5px;
    &:hover {
        color: #C53939;
        cursor: pointer;
        background-color: white;
    }
`
export const Yesbutton = styled.button`
    width: 20%;
    padding: 10px 15px;
    border: none;
    background-color: #C53939;
    font-size: 20px;
    color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
        color: #C53939;
        cursor: pointer;
        background-color: white;
    }
`
//footer
export const Footer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: ${(props) => props.top};
        margin: 0px;
    }
    width: 30%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    top: ${(props) => props.margin};
    position: relative;
    color: white;
`
export const Footerh1 = styled.div`
    @media (max-width: 768px) {
        
    }
    font-size: 20px;
    font-weight: 20px;
    margin: 0px 10px;
    a:hover{
        color: lightgray;
        cursor: pointer;
    };
    a {
        color: white;
        text-decoration: none;
    }
`

//News
export const NewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #212529;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`
export const NewsContainer2 = styled.div`
    width: 80%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`
export const NewsContent = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid rgb(197, 57, 57);
    border-radius: 10px;
    h1 {
        color: white;
    }
    p {
        color: white;
        font-size: 20px;
        margin-top: 10px;
    }
`
export const BodyA = styled.a`
    @media (max-width: 768px) {
        margin-top: -40px;
    }
    padding: 10px 25px;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    background-color: #C53939;
    font-size: 40px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        color: #C53939;
        cursor: pointer;
        transform: scale(1.1);
        background-color: white;
    }
`
export const Socials = styled.div`
    @media (max-width: 768px) {
        top: 130px;
    }
    display: flex;
    justify-content: space-around;
    top: 200px;
    position: relative;
    img {
        padding: 10px;
    }
`
