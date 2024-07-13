// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Body1, Body2, Tablehead, Tableday4, Tableday2, Tableday3, Tableend } from "../../components/utilities/Utilities.styled"
import { WmTipps } from "./WmTipps.jsx"
import { WMStats } from "./WMStats.jsx"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { WMKO } from './WMKO';

var gameDays = [
    false, false, false, false, false, false, false, false
  ];
var ko = [
    false, false, false, false, false
  ];
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

export const WmFundament = () => {
  const [showGames, setshowGames] = useState(gameDays);
  const [showKO, setshowKO] = useState(ko);
  const [stats, setStats] = useState(false);
  const [points, setPoints] = useState(false);
  const [prices, setPrices] = useState(false);

  const manageDisplay = (number) =>{
    var newgameDays = []
    gameDays.forEach((day, i) => {
        if(i === number) newgameDays.push(!day)
        else newgameDays.push(false)
    })
    gameDays = newgameDays
    setshowGames(newgameDays)   
  }
  const manageDisplay2 = (number) =>{
    var newgameDays = []
    ko.forEach((day, i) => {
        if(i === number) newgameDays.push(!day)
        else newgameDays.push(false)
    })
    ko = newgameDays
    setshowKO(newgameDays)   
  }
  return (
    <>
      <Body1 style={{marginBottom: "30px"}}>
        <Body2>
            <h1 style={{color: "white"}}>Die gesamte Punkteberechnung wird am We kommen!</h1>
            <Tablehead onClick={() => setStats(!stats)} style={{backgroundColor: "rgb(2, 15, 42)"}}>
                <h1 style={{color: "white"}}>Statistiken Tippen</h1>
                <h4 style={{color: "white"}}>Geschlossen!</h4>
            </Tablehead>
            {!stats && 
                <Tableday3 onClick={() => setStats(!stats)}>
                    <h2>Aufklappen</h2>
                </Tableday3>
            }
            {stats && <WMStats />}
            <Tableend  style={{backgroundColor: "rgb(2, 15, 42)"}}>
                <h1 style={{color: "white"}}></h1>
            </Tableend>
        </Body2>
      </Body1>
      <Body1 style={{marginBottom: "30px"}}>
        <Body2>
            <Tablehead onClick={() => setPoints(!points)} style={{backgroundColor: "rgb(2, 15, 42)"}}>
                <h1 style={{color: "white"}}>Punkteverteilung</h1>
            </Tablehead>
            {!points && <Tableday3 onClick={() => setPoints(!points)}>
                <h2>Aufklappen</h2>
            </Tableday3>}
            {points && 
            <Tableday3>
                <h3>Richtiger Tipp: 4 Punkte</h3>
                <h3>Tordifferenz richtig: 2 Punkte</h3>
                <h3>Tendenz richtig: 1 Punkt</h3>
                <h3>Gruppensieg: 4 Punkte</h3>
                <h3>Statistiken Tippen: Für den 1., 2., 3., 4. und 6. Punkt gibt es jeweils 4 Punkte. Für den 5. keinen, das werte ich später einfach nur aus um zu gucken wie ihr euch eingeschätzt habt :D</h3>
                <h3>Wer gewinnt die Gruppe: 4 Punkte</h3>
                <h3>Wie viele 11 Meter wird es geben: 4 Punkte</h3>
                <h3>Wie viele Tore werden fallen: 8 Punkte genau richtig, 4 Punkte(-1), 2 Punkte (-2), 1 Punkt (-3)</h3>
                <h3>Für Endspiele wird es 4 Punkte geben. Der Tipp richtet sich nach den ersten 90 Minuten! Wenn es also 2:2 steht und du Remis getippt hast, bekommst du 4 Punkte.</h3>

            </Tableday3>
            }
            <Tableend  style={{backgroundColor: "rgb(2, 15, 42)"}}>
                <h1 style={{color: "white"}}></h1>
            </Tableend>
        </Body2>
      </Body1>
      <Body1>
            <Body2>
                <Tablehead style={{backgroundColor: "rgb(2, 15, 42)"}}>
                    <h1 style={{color: "white"}}>Alle Gruppen</h1>
                </Tablehead>
                <Tableday3 onClick={() => manageDisplay(0)}>
                    <h2>Gruppe A</h2>
                </Tableday3>
                {showGames[0] && <WmTipps group={1}/>}
                <Tableday3 onClick={() => manageDisplay(1)}>
                    <h2>Gruppe B</h2>
                </Tableday3>
                {showGames[1] && <WmTipps group={2}/>}
                <Tableday3 onClick={() => manageDisplay(2)}>
                    <h2>Gruppe C</h2>
                </Tableday3>
                {showGames[2] && <WmTipps group={3}/>}
                <Tableday3 onClick={() => manageDisplay(3)}>
                    <h2>Gruppe D</h2>
                </Tableday3>
                {showGames[3] && <WmTipps group={4}/>}
                <Tableday3 onClick={() => manageDisplay(4)}>
                    <h2>Gruppe E</h2>
                </Tableday3>
                {showGames[4] && <WmTipps group={5}/>}
                <Tableday3  onClick={() => manageDisplay(5)}>
                    <h2>Gruppe F</h2>
                </Tableday3>
                {showGames[5] && <WmTipps group={6}/>}
                <Tableday3  onClick={() => manageDisplay(6)}>
                    <h2>Gruppe G</h2>
                </Tableday3>
                {showGames[6] && <WmTipps group={7}/>}
                <Tableday3  onClick={() => manageDisplay(7)}>
                    <h2>Gruppe H</h2>
                </Tableday3>
                {showGames[7] && <WmTipps group={8}/>}
                <Tableend  style={{backgroundColor: "rgb(2, 15, 42)"}}>
                    <h1 style={{color: "white", fontSize: "17px"}}>Viel Glück!</h1>
                </Tableend>
            </Body2>
        </Body1>
      <Body1 style={{marginTop: "50px"}}>
            <Body2>
                <Tablehead style={{backgroundColor: "rgb(2, 15, 42)"}}>
                    <h1 style={{color: "white"}}>KO PHASE</h1>
                </Tablehead>
                <Tableday3 onClick={() => manageDisplay2(0)}>
                    <h2>Alle Spiele</h2>
                </Tableday3>
                {showKO[0] && <WMKO group={9}/>}
                
                <Tableend  style={{backgroundColor: "rgb(2, 15, 42)"}}>
                    <h1 style={{color: "white", fontSize: "17px"}}>AND THE WINNER IS...</h1>
                </Tableend>
            </Body2>
        </Body1>
        <Body1 onClick={() => setPrices(!prices)} style={{marginTop: "30px", color: "white"}}>
            <Body2>
                <Tablehead>
                    <h1  style={{}}>Preise</h1>
                </Tablehead>
                {!prices && <Tableday3 style={{ border: "none", color: "black" }}>
                    <h2>Aufklappen!</h2>
                </Tableday3>}
                {prices && <><Tableday3 style={{ border: "none", color: "black", backgroundColor: "lightgreen"}}>
                      <h3>Bis 25 Teilnehmer:</h3>
                      <h2>1. Platz: 15 Euro</h2>
                  </Tableday3><Tableday3 style={{ border: "none", color: "black" }}>
                          <h3>Bis 50 Teilnehmer:</h3>
                          <h2>1. Platz: 15 Euro</h2>
                          <h2>2. Platz: 10 Euro</h2>
                      </Tableday3><Tableday3 style={{ border: "none", color: "black" }}>
                          <h3>Bis 100 Teilnehmer:</h3>
                          <h2>1. Platz: 20 Euro</h2>
                          <h2>2. Platz: 15 Euro</h2>
                          <h2>3. Platz: 10 Euro</h2>
                      </Tableday3><Tableday3 style={{ border: "none", color: "black" }}>
                          <h3>Bis 500 Teilnehmer:</h3>
                          <h2>1. Platz: 30 Euro</h2>
                          <h2>2. Platz: 20 Euro</h2>
                          <h2>3. Platz: 15 Euro</h2>
                      </Tableday3><Tableday3 style={{ border: "none", color: "black" }}>
                          <h3>Über 500 Teilnehmer:</h3>
                          <h2>1. Platz: 30 Euro</h2>
                          <h2>2. Platz: 20 Euro</h2>
                          <h2>3. Platz: 15 Euro</h2>
                          <h2>4. Platz: 10 Euro</h2>
                          <h2>5. Platz: 5 Euro</h2>
                      </Tableday3></>}
                <Tableend  style={{height: "20px"}}></Tableend>
            </Body2>
        </Body1>
    </>
  )
}
