// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import GlobalStyles from "../../Global.jsx";
import { Header } from "../../components/header/Header"
import { Body1, Body2, Input1, Loginh1, Loginbutton, Loginh3, Text } from "../anmelden/Anmelden.styled"
import { axiosInstance } from '../../utils/config.js';
import { AuthContext } from '../../context/AuthContext.js';
import bild2 from "../../assets/bild2.jpg"

export const Registrieren = () => {
  const [ credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false
 })

 const { loading, error, dispatch } = useContext(AuthContext)

 const navigate = useNavigate()

 const handleChange = (e) =>{
   setCredentials((prev)=>({...prev, [e.target.id]: e.target.value}));
 };

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosInstance.post("/auth/register", credentials)
    } catch (err) {
      
    }

    dispatch({type:"LOGIN_START"})
    try {
        const res = await axiosInstance.post("/auth/login", credentials)
        dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        navigate("/tipps")
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
    }
  }

  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body1  img={bild2}>
    	    <Body2>
                <Loginh1>Registriere dich!</Loginh1>
                <Input1 id="username" placeholder="Username" onChange={handleChange}></Input1>
                <Input1 id="email" placeholder="Email" onChange={handleChange} style={{marginTop: "0px"}}></Input1>
                <Input1 id="password" type="password" onChange={handleChange} placeholder="Passwort" style={{marginTop: "0px"}}></Input1>
                <Loginbutton onClick={handleClick}>REGISTRIEREN</Loginbutton>
                <Text style={{marginBottom: "40px", color: "white"}}>Wenn du dich registrierst, willigst du ein, dass deine Daten gespeichert werden. Diese Daten werden aber an keine Dritten weitergegeben.</Text>
                <Loginh3>Du hast bereits ein Konto?</Loginh3>
                <Loginbutton>
                    <Link to="/anmelden" style={{color: "white", textDecoration: "none"}}>
                        ANMELDEN
                    </Link>
                </Loginbutton>
            </Body2>
        </Body1>
    </>
  )
}
