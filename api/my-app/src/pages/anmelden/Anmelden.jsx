// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import GlobalStyles from "../../Global.jsx";
import { Header } from "../../components/header/Header"
import { Body1, Body2, Input1, Loginh1, Loginbutton, Loginh3, Text } from "./Anmelden.styled.jsx"
import { AuthContext } from '../../context/AuthContext.js';
import { axiosInstance } from '../../utils/config.js';
import bild4 from "../../assets/bild4.jpg"

export const Anmelden = () => {
  const [ credentials, setCredentials] = useState({
     username: "",
     password: "",
  })

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()
  var test = false

  const handleChange = (e) =>{
    setCredentials((prev)=>({...prev, [e.target.id]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
        const res = await axiosInstance.post("/auth/login", credentials)
        dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        test = true
        navigate("/wm")
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
    }
  };

  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body1  img={bild4}>
    	    <Body2>
                <Loginh1>Melde dich an!</Loginh1>
                <Input1 id="username" type="text" placeholder="Username" onChange={handleChange}></Input1>
                <Input1 id="password" type="password" placeholder="Passwort" onChange={handleChange} style={{marginTop: "0px"}}></Input1>
                <Loginbutton onClick={handleClick}>ANMELDEN</Loginbutton>
                <h1>{test}</h1>
                <Text style={{marginBottom: "40px", color: "white"}}>Wenn du dich anmeldest, wird ein Cookie gesetzt, der deine Sitzung validiert. Wenn du dich abmeldest, wird der Cookie gelöscht</Text>
                <Loginh3>Noch kein Konto?</Loginh3>
                <Loginbutton>
                    <Link to="/registrieren" style={{color: "white", textDecoration: "none"}}>
                        REGISTRIEREN
                    </Link>
                </Loginbutton>
                {error && <span>{error.message}</span>}
            </Body2>
        </Body1>
    </>
  )
}
