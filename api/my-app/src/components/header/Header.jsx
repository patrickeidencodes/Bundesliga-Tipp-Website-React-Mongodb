// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { Container1, Container2, Container3, Container3Logo,  H3nav, Container3Burger, Burger } from "./Header.styled"
import { AuthContext } from '../../context/AuthContext'
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const { user, dispatch } = useContext(AuthContext)
  const [display, setDisplay] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGOUT"})
  };

  return (
    <Container1>
        <Container2>
            {<Container3Logo>
                <h1>Patrick <span style={{color: "red"}}>EN</span></h1>
            </Container3Logo>}
            {user && 
            <Container3 style={{width: "60%", maxwidth: "1024px", justifyContent: "flex-end"}}>
              <H3nav>
                <Link to="/" style={{color: "black", textDecoration: "none"}}>
                  Home
                </Link>
              </H3nav>
              {false && <>
                <H3nav>
                  <Link to="/tabelle" style={{ color: "black", textDecoration: "none" }}>
                    Tabellen-Tippspiel
                  </Link>
                </H3nav>
              </>}
              <H3nav>
                <Link to="/tipps" style={{ color: "black", textDecoration: "none" }}>
                  Spieltag-Tippspiel
                </Link>
              </H3nav>
              <H3nav>
                <Link to="/wm" style={{ color: "black", textDecoration: "none" }}>
                  WM-Tippspiel
                </Link>
              </H3nav>
              <H3nav onClick={handleLogout}>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Abmelden
                </Link>
              </H3nav>
            </Container3>
            }
            {!user && 
            <Container3 style={{width: "60%", maxwidth: "1024px", justifyContent: "flex-end"}}>
              <H3nav>
                <Link to="/" style={{color: "black", textDecoration: "none"}}>
                  Home
                </Link>
              </H3nav>
              {false && <H3nav>
                <Link to="/tabelle" style={{color: "black", textDecoration: "none"}}>
                  Tabellen-Tippspiel
                </Link>
              </H3nav>}
              <H3nav>
                <Link to="/anmelden" style={{color: "black", textDecoration: "none"}}>
                  Anmelden
                </Link>
              </H3nav>
            </Container3>
            }
            {display && user &&
            <Container3Burger>
              <H3nav>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>
                  Home
                </Link>
              </H3nav>
              <H3nav>
                <Link to="/tipps" style={{ color: "white", textDecoration: "none" }}>
                  Spieltag-Tippspiel
                </Link>
              </H3nav>
              <H3nav>
                <Link to="/wm" style={{ color: "white", textDecoration: "none" }}>
                  WM-Tippspiel
                </Link>
              </H3nav>
              <H3nav onClick={handleLogout}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Abmelden
                </Link>
              </H3nav>
            </Container3Burger>
            }
            {display && !user &&
            <Container3Burger style={{marginTop: "-20px"}}>
              <H3nav>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>
                  Home
                </Link>
              </H3nav>
              <H3nav>
                <Link to="/anmelden" style={{color: "white", textDecoration: "none"}}>
                  Anmelden
                </Link>
              </H3nav>
            </Container3Burger>
            }
            <Burger>
              <AiOutlineMenu style={{position: "absolute", left: "90%", color: "red"}} onClick={() => setDisplay(!display)}/>
            </Burger>
            
        </Container2>
    </Container1>
  )
}
