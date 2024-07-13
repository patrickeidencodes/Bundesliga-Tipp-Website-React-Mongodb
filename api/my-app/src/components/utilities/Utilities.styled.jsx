// @ts-nocheck
import styled from "styled-components";

//Container start
export const Body1 = styled.div`
    @media (max-width: 768px) {
        top: 100px;
    }
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 200px;
    display: flex;
    justify-content: center;
`
export const Body2 = styled.div`
    @media (max-width: 768px) {
        width: 90%;
    }
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    max-width: 1024px;
`
//Container end
//Table start
export const Tablehead = styled.div`
    @media (max-width: 768px) {
        h1 {
            font-size: 20px;
        }
    }
    background-color: rgb(197, 57, 57);
    border-radius: 10px 10px 0px 0px;
    border: none;
    padding: 5px;
`
export const Tableday = styled.div`
    background-color: white;
    padding: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    cursor: pointer;
    &:hover {
        color: #6ecae0;
    }
`
export const Tableday2 = styled.div`
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
    &:hover {
        color: #6ecae0;
    }
`
export const Tableday3 = styled.div`
    @media (max-width: 768px) {
        h2 {
            font-size: 15px;
        }
    }
    background-color: white;
    padding: 10px;
    border-top: 1px solid black;
    cursor: pointer;
    &:hover {
        color: #6ecae0;
    }
`
export const Tableday4 = styled.div`
    @media (max-width: 768px) {
        h2 {
            font-size: 15px;
        }
    }
    background-color: white;
    padding: 10px;
    border-top: 1px solid black;
`
export const Tableend = styled.div`
    background-color: rgb(197, 57, 57);
    border-radius: 0px 0px 10px 10px;
    border: none;
    padding: 5px;
`
//Table end
//Spieltag start
export const Spieltag1 = styled.div`
    background-color: #000e14;
    color: white;
    border-radius: 5px;
    flex-direction: column;
`
export const Gamecontainer = styled.div`
    @media (max-width: 768px) {
        h2 {
            font-size: 20px;
        }
    }
    background-color: #212529;
    color: white;
    border-radius: 5px;
    flex-direction: column;
    margin: 10px;
    padding-bottom: 10px;
    padding-top: 15px;
`
export const Game = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`
export const Team1 = styled.div`
    width: 35%;
    margin-bottom: 10px;
    p {
        text-align: right;
    }
`
export const Result = styled.div`
    width: 30%;

`
export const Inputresult = styled.input`
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    top: -5px;
    border: none;
    background-color: gray;
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    &:focus {
        outline: none;
    }
`
export const Team2 = styled.div`
    width: 35%;
    margin-bottom: 10px;
    p {
        text-align: left;
    }
`
export const Gamedate = styled.div`
    text-align: start;
    margin: 5px;
`

//Spieltag end
//Fonts start
export const Tippsh1 = styled.h1`
    font-size: 30px;
    padding: 10px;
`
//Fonts end

//Tabelle start
export const Table1 = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
export const Tablehead2 = styled.div`
    background-color: #212529;
    border-radius: 5px 5px 0px 0px;
    padding: 10px;
`
export const Tableentry = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
export const Tableend2 = styled.div`
    background-color: #212529;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
`
export const Place = styled.div`
    background-color: white;
    color: black;
    width: 30%;
    text-align: left;
`
export const Name = styled.div`
    background-color: white;
    color: black;
    width: 30%;
    text-align: center;
`
export const Points = styled.div`
    background-color: white;
    color: black;
    width: 30%;
    text-align: right;
`
export const Switch = styled.div`
    background-color: rgb(197,57,57);
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: black;
    }
`
//Tabelle end