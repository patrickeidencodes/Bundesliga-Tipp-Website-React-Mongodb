// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Spieltagtipps } from './Spieltagtipps'
import { Body1, Body2, Tablehead, Tableday, Tableday2, Tableday3, Tableend } from "./Utilities.styled"

var gameDays = [
    false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false,
    false, false, false
  ];
var click = [
    false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false,
    false, false, true
  ];
var types = [
false, false, false, false, false, false, false, false, false, 
true, false, false, false, false, false, false, false, false,
false, false, false
];

export const Spieltage = () => {
  
  const [showGames, setshowGames] = useState(gameDays);

  const manageDisplay = (number) =>{
    var newgameDays = []
    gameDays.forEach((day, i) => {
        if(i === number) newgameDays.push(!day)
        else newgameDays.push(false)
    })
    gameDays = newgameDays
    setshowGames(newgameDays)   
  }

  return (
    <>
      <Body1>
            <Body2>
                <Tablehead>
                    <h1 style={{color: "white"}}>Alle Spieltage</h1>
                </Tablehead>
                {gameDays.map((game, i) => (
                    <>
                        <Tableday3 onClick={() => manageDisplay(i)}>
                            <h2>{i + 1}. Spieltag</h2>
                            {types[i] && <p style={{ marginTop: "10px" }}>Da dieser Spieltag nicht getippt wurde, könnt ihr bis zum 21.10 die Tipps der KI tippen :)</p>}
                        </Tableday3><>{showGames[i] && <Spieltagtipps day={i+1} click={click[i]} typ={types[i]} />}</>
                    </>
                ))}   
                {!showGames[showGames.length-1] && <Tableend>
                    <h1 style={{color: "white"}}>TIPPE JETZT MIT!</h1>
                </Tableend>}  
            </Body2>
        </Body1>
    </>
  )
  /*
  return (
    <Body1>
        <Body2>
            <Tablehead>
                <h1 style={{color: "white"}}>Alle Spieltage</h1>
            </Tablehead>
            <Tableday3 onClick={() => manageDisplay(0)}>
                <h2>1. Spieltag</h2>
            </Tableday3>
            {showGames[0] && <Spieltagtipps day={1} click={false}/>}
            <Tableday3 onClick={() => manageDisplay(1)}>
                <h2>2. Spieltag</h2>
            </Tableday3>
            {showGames[1] && <Spieltagtipps day={2} click={false} />}
            <Tableday3 onClick={() => manageDisplay(2)}>
                <h2>3. Spieltag</h2>
            </Tableday3>
            {showGames[2] && <Spieltagtipps day={3} click={false} />}
            <Tableday3 onClick={() => manageDisplay(3)}>
                <h2>4. Spieltag</h2>
            </Tableday3>
            {showGames[3] && <Spieltagtipps day={4} click={false} />}
            <Tableday3 onClick={() => manageDisplay(4)}>
                <h2>5. Spieltag</h2>
            </Tableday3>
            {showGames[4] && <Spieltagtipps day={5} click={false}/>}
            <Tableday3  onClick={() => manageDisplay(5)}>
                <h2>6. Spieltag</h2>
            </Tableday3>
            {showGames[5] && <Spieltagtipps day={6}  click={false}/>}
            <Tableday3  onClick={() => manageDisplay(6)}>
                <h2>7. Spieltag</h2>
            </Tableday3>
            {showGames[6] && <Spieltagtipps day={7}  click={false}/>}
            <Tableday3  onClick={() => manageDisplay(7)}>
                <h2>8. Spieltag</h2>
            </Tableday3>
            {showGames[7] && <Spieltagtipps day={8}  click={false}/>}
            <Tableday3  onClick={() => manageDisplay(8)}>
                <h2>9. Spieltag</h2>
            </Tableday3>
            {showGames[8] && <Spieltagtipps day={9}  click={false}/>}
            <Tableday3  onClick={() => manageDisplay(9)}>
                <h2>10. Spieltag {"(Special)"}</h2>
                <p style={{marginTop: "10px"}}>Da dieser Spieltag nicht getippt wurde, könnt ihr bis zum 21.10 die Tipps der KI tippen :)</p>
            </Tableday3>
            {showGames[9] && <Spieltagtipps day={10} click={true}/>}
            <Tableday3  onClick={() => manageDisplay(10)}>
                <h2>11. Spieltag</h2>
            </Tableday3>
            {showGames[10] && <Spieltagtipps day={11} click={true}/>}
            {!showGames[showGames.length-1] && <Tableend>
                <h1 style={{color: "white"}}>TIPPE JETZT MIT!</h1>
            </Tableend>}
        </Body2>
    </Body1>
  )
  */
}
