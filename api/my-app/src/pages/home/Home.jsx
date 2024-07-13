// @ts-nocheck
import React from 'react'
import GlobalStyles from "../../Global.jsx";
import { Header } from "../../components/header/Header"
import { Body } from "../../components/hauptBody/Body"
import { News } from '../../components/hauptBody/News.jsx';
export const Home = () => {
  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
        <Body />
        <News />
    </>
  )
}
