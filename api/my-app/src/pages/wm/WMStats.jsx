// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { Bodybuttonwh, Yesbutton } from './Wm.styled'
import { Spieltag1, Gamedate, Inputresult, Gamecontainer, Game, Team1, Team2, Result } from "../../components/utilities/Utilities.styled"
import { Body1, Body2, Tablehead, Tableday4, Tableday2, Tableday3, Tableend } from "../../components/utilities/Utilities.styled"
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext.js'
import { axiosInstance } from '../../utils/config.js';
import { calculateScore } from "../../functions/functions.js"
import { WmTabelle } from './WmTabelle'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const WMStats = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error, reFetch } = useFetch("/wmstats/find/stats/"+user.username);
  const [statistiken, setStatistiken] = useState(["", "", 0, "", 0, 0])
  var createStats = false;
  var init = false;
  const teams = 
["Katar", "Ecuador", "Sénégal", "Niederlande",
"England", "Iran", "USA", "Wales",
"Argentinien", "Saudi-Arabien", "Mexiko", "Polen",
"Dänemark", "Tunesien", "Frankreich", "Australien",
"Deutschland", "Japan", "Spanien", "Costa Rica",
"Marokko", "Kroatien", "Belgien", "Kanada",
"Schweiz", "Kamerun", "Brasilien", "Serbien",
"Uruguay", "Südkorea", "Portugal", "Ghana"]

const goal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

  const insertData = () => {
    if (init){
        init = false
        let newUserStats = statistiken
        newUserStats[0] = data[0].winner
        newUserStats[1] = data[0].mostGoals
        newUserStats[2] = data[0].luecke
        newUserStats[3] = data[0].far
        newUserStats[4] = data[0].points
        newUserStats[5] = data[0].extensions
        setStatistiken(newUserStats)
    }
  }

  const insertDefaultData = () => {
    var dict = {}
    dict["user"] = user.username
    dict["winner"] = ""
    dict["mostGoals"] = ""
    dict["luecke"] = 0
    dict["far"] = ""
    dict["points"] = 0
    dict["extensions"] = 0
    return dict
 }

  const getUpdatedData = () => {
    var dict = {}
    dict["winner"] = statistiken[0]
    dict["mostGoals"] = statistiken[1]
    dict["luecke"] = statistiken[2]
    dict["far"] = statistiken[3]
    dict["points"] = statistiken[4]
    dict["extensions"] = statistiken[5]
    return dict
 }
 const makeTrue = () => {
    init = true;
 }

 useEffect(() => {
    insertData()
 })
 const handleOption1 = (e) =>{
    let newStats = statistiken;
    newStats[0] = e.value
    setStatistiken(newStats)
 }
 const handleOption2 = (e) =>{
    let newStats = statistiken;
    newStats[1] = e.value
    setStatistiken(newStats)
 }
 const handleOption3 = (e) =>{
    let newStats = statistiken;
    newStats[2] = e.value
    setStatistiken(newStats)
 }
 const handleOption4 = (e) =>{
    let newStats = statistiken;
    newStats[3] = e.value
    setStatistiken(newStats)
 }
 const handleOption5 = (e) =>{
    let newStats = statistiken;
    newStats[4] = e.value
    setStatistiken(newStats)
 }
 const handleOption6 = (e) =>{
    let newStats = statistiken;
    newStats[5] = e.value
    setStatistiken(newStats)
 }

 const handleClick = async (e) => {
    e.preventDefault()
    let newData = getUpdatedData()
    try {
        const res = await axiosInstance.put("/wmstats/update/stats/"+user.username+"/", newData)
        window.location.reload(false);
        window.scrollTo(0, 0);
        
    } catch (err) {
    }
  }

  const checkTime = () => {
    if (Date.now() > 1668960000000) {
      return true;
    }else{
      return false;
    }
  }

  const handleNewTipps = async() => {
    if(!createStats){
      const newData = insertDefaultData()
      try {
          const res = await axiosInstance.post("/wmstats/create/stats", newData)
          createStats = true
          try {
            reFetch()
            insertData()
          } catch (err) {
          }
      } catch (err) {
      }
    }
  } 

  if (data.length > 0){
    return (
        <>
        {loading?
            (<h1>Loading...</h1>)
            :
            <Tableday4>
                <h2 style={{marginBottom: "10px"}}>Wer wird Weltmeister?</h2>
                <div style={{marginBottom: "30px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={teams} onChange={handleOption1} placeholder={data[0].winner}/>
                </div>
                <h2 style={{marginBottom: "10px"}}>Wer schießt die meisten Tore?</h2>
                <div style={{marginBottom: "30px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={teams} onChange={handleOption2} placeholder={data[0].mostGoals}/>
                </div>
                <h2 style={{marginBottom: "10px"}}>Wie viele Tore schießt Lücke?</h2>
                <div style={{marginBottom: "30px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} onChange={handleOption3} placeholder={data[0].luecke}/>
                </div>
                <h2 style={{marginBottom: "10px"}}>Wie weit kommt Deutschland?</h2>
                <div style={{marginBottom: "30px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={["Gruppe", "AV", "VV", "HF", "F", "Sieger"]} onChange={handleOption4} placeholder={data[0].far}/>
                </div>
                <h2 style={{marginBottom: "10px"}}>Wie viele Punkte wirst du erreichen?</h2>
                <div style={{marginBottom: "30px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={goal} onChange={handleOption5} placeholder={data[0].points}/>
                </div>
                <h2 style={{marginBottom: "10px"}}>Wie viele Verlängerungen wird Deutschland spielen?</h2>
                <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown options={[0, 1, 2, 3, 4]} placeholder={data[0].extensions} onChange={handleOption6}/>
                </div>
                {!checkTime() ? <Bodybuttonwh style={{marginTop: "10px"}} onClick={handleClick}>Speichern</Bodybuttonwh>:""} 
                {data.length && makeTrue()}   
            </Tableday4>
        }
        </>
      )
  }else{
    return (
        <Spieltag1 style={{borderRadius: "0px"}}>
            <h3 style={{padding: "15px"}}>Willst du mitmachen?</h3>
            <Yesbutton onClick={handleNewTipps}>Ja!</Yesbutton>
        </Spieltag1>
    )
  }
  
}
