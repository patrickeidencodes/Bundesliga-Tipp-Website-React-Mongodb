// @ts-nocheck
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Body1, Body2, Bodyh1, Bodybutton, Footer, Footerh1, BodyA, Socials } from "./Body.styled"
import { AuthContext } from '../../context/AuthContext'
import bild1 from "../../assets/bild1.jpg"
import yt from "../../assets/yt.svg"
import insta from "../../assets/insta.svg"
import tik from "../../assets/tik.svg"
import { Link } from "react-router-dom"
import { AiFillYoutube, AiOutlineInstagram} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export const Body = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/registrieren")
  }
  const { user, dispatch } = useContext(AuthContext)
  return (
    <Body1 img={bild1}>
      <Body2>
        {user ? <>
        <Bodyh1>Herzlich Willkommen</Bodyh1>
        <Bodyh1 style={{color: "#C53939"}}>{user.username}</Bodyh1>
        </> :
        <>
        <Bodyh1>Mach <span style={{color: "#C53939"}}>JETZT</span> beim</Bodyh1>
        <Bodyh1>Tippspiel mit!</Bodyh1>
        <Bodybutton onClick={handleClick}>REGISTRIEREN</Bodybutton>
        </> 
        }
        {user && <Footer margin={"273px"} top={"140px"}>
          <Footerh1>
            <Link to="/info?type=kontakt">
              Kontakt
            </Link>
          </Footerh1>
          <Footerh1>
            <Link to="/info?type=impressum">
              Impressum
            </Link>
          </Footerh1>
          <Footerh1>
            <Link to="/info?type=datenschutz">
              Datenschutz
            </Link>
          </Footerh1>
          <Footerh1>
          <a href="https://paypal.me/paeiden?country.x=DE&locale.x=de_DE">
              Cofé
            </a>
          </Footerh1>
        </Footer>}
        {!user && <Footer margin={"273px"} top={"80px"}>
          <Footerh1>
            <Link to="/info?type=kontakt">
              Kontakt
            </Link>
          </Footerh1>
          <Footerh1>
            <Link to="/info?type=impressum">
              Impressum
            </Link>
          </Footerh1>
          <Footerh1>
            <Link to="/info?type=datenschutz">
              Datenschutz
            </Link>
          </Footerh1>
          <Footerh1>
            <a href="https://paypal.me/paeiden?country.x=DE&locale.x=de_DE">
              Cofé
            </a>
          </Footerh1>
        </Footer>}
        {user && <BodyA href="#news">Zu den News</BodyA>}
        <Socials>
          <a href="https://www.youtube.com/channel/UC3Njdyvnmm53Vw6KVcTlb2w">
            <img src={yt} alt="youtube"/>
          </a>
          <a href="https://www.instagram.com/patrickeidn/">
          <img src={insta} alt="instagram"/>
          </a>
          <a href="https://www.tiktok.com/@en.coded?lang=de-DE">
            <img src={tik} alt="tiktok"/>
          </a>
          
          
          
        </Socials>
      </Body2>
    </Body1>
  )
}
