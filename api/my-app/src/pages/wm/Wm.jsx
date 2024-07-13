// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header.jsx';
import GlobalStyles from "../../Global.jsx";
import { Body1, BodyWMrest  } from '../../components/hauptBody/Body.styled.jsx';
import bild3 from "../../assets/wm.jpg"
import { WmFundament } from './WmFundament.jsx'

export const WM = () => {

  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body1 img={bild3}>
            <WmFundament />
        </Body1>
        <BodyWMrest>
        </BodyWMrest>
    </>
  )
}
