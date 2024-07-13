// @ts-nocheck
import React from 'react'
import { Body1, Bodyrest  } from '../../components/hauptBody/Body.styled.jsx';
import { Header } from '../../components/header/Header.jsx';
import GlobalStyles from "../../Global.jsx";
import { Spieltage } from '../../components/utilities/Spieltage.jsx';
import bild3 from "../../assets/bild3.jpg"

export const Tipps = () => {
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body1 img={bild3}>
          <Spieltage />
        </Body1>
        <Bodyrest>
        </Bodyrest>
    </>
  )
}
