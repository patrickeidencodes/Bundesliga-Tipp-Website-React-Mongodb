// @ts-nocheck
import React from 'react'
import { Body1 } from '../../components/hauptBody/Body.styled'
import { Header } from "../../components/header/Header"
import GlobalStyles from '../../Global'
import bild3 from "../../assets/bild3.jpg"

export const News = () => {
  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body1 img={bild3}>
        </Body1>
    </>
  )
}
