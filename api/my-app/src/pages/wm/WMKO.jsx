// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { Bodybuttonwh, Yesbutton } from './Wm.styled'
import { Spieltag1, Gamedate, Inputresult, Gamecontainer, Game, Team1, Team2, Result } from "../../components/utilities/Utilities.styled"
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext.js'
import { axiosInstance } from '../../utils/config.js';
import { calculateScore } from "../../functions/functions.js"
import { WmTabelle } from './WmTabelle'

export const WMKO = (props) => {
    const { user } = useContext(AuthContext);
    const { data, loading, error, reFetch } = useFetch("/wm/find/"+user.username+"/0");
    var init = false;
    var createTipps = false;
    const results = [
      [[3,1], [2,1], [3,1], [3,0], [1,1], [4,1], [0,0], [6,1]], 
      [[1,1], [2,2], [1,0], [1,2]],
      [[3,0], [2,0]],
      [[,]],
      [[,]]
    ]
    const time = 
      ["1670079600000", "1670094000000", "1670166000000", "1670180400000", "1670252400000", "1670266800000", "1670338800000", "1670353200000", 
      "1670598000000", "1670612400000", "1670684400000", "1670698800000", "1670958000000", "1671044400000", "1671289200000", "1671375600000"]

    const spiele = [
      [["Niederlande", "USA"], ["Argentinien", "Australien"], ["Frankreich", "Polen"], ["England", "Senegal"], ["Japan", "Kroatien"], ["Brasilien", "Südkorea"], ["Marokko", "Spanien"], ["Portugal", "Schweiz"]],
      [["Kroatien", "Brasilien"], ["Niederlande", "Argentinien"], ["Marokko", "Portugal"], ["England", "Frankreich"]],
      [["Argentinien", "Kroatien"], ["Frankreich", "Marokko"]],
      [["Kroatien", "Marokko"]],
      [["Argentinien", "Frankreich"]]
    ]
    const dates = [
      ["03.12.2022", "03.12.2022", "04.12.2022", "04.12.2022", "05.12.2022", "05.12.2022", "06.12.2022", "06.12.2022"],
      ["09.12.2022", "09.12.2022", "10.12.2022", "10.12.2022"],
      ["13.12.2022", "14.12.2022"],
      ["17.12.2022"],
      ["18.12.2022"]
    ]
    const clock = [
      ["16:00", "20:00", "16:00", "20:00", "16:00", "20:00", "16:00", "20:00"],
      ["16:00", "20:00", "16:00", "20:00"],
      ["20:00", "20:00"],
      ["16:00"],
      ["16:00"]
    ]
    const [af, setAf] = useState({
      games: [
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 9
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 10
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 10
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 10
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 10
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 11
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 11
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 12
          },
          {
              "heimName": undefined,
              "heimTore": undefined,
              "auswName": undefined,
              "auswTore": undefined,
              "ko": 13
          }
      ]
    })
  
    //functions start
     /*
    if (document.readyState === "complete"){
      var set = false
      console.log(time.length-1)
      console.log(props.day-1)
      time[props.group-1].forEach((game) => {
          if (Date.now() < game && !set){
          setTimeout(function() { window.location.reload(false); }, game - Date.now());
          set = true
          }
      })
    }
  
  */
  const checkTippTime = (time) => {
    if(Date.now() < time){
      return false;
    }else{
      return true;
    }
  }
  
  const insertData = () => {
      if (init){
          init = false
          let newTipps = af
          data[0].games.map((tipp, i) => {
              newTipps.games[i]["heimName"] = tipp.heimName;
              newTipps.games[i]["heimTore"] = parseInt(tipp.heimTore);
              newTipps.games[i]["auswName"] = tipp.auswName;
              newTipps.games[i]["auswTore"] = parseInt(tipp.auswTore);
              newTipps.games[i]["ko"] = parseInt(tipp.ko);
          });
          setAf(newTipps)
      }
  }
  
  const insertDefaultData = () => {
      var dict = {}
      const d = new Date();
      dict["group"] = 0
      dict["date"] = d.getDate().toString()+"."+(d.getMonth()+1).toString()+"."+d.getFullYear().toString()
      dict["user"] = user.username
      dict["games"] = []
      spiele.map((ko, j) => {
        ko.map((game, i) => {
            var newGame = {}
            newGame["heimName"] = game[0];
            newGame["heimTore"] = 0;
            newGame["auswName"] = game[1];
            newGame["auswTore"] = 0;
            newGame["ko"] = j+9;
            dict["games"].push(newGame);
          });
      })
      dict["groupWin"] = ""
      dict["elf"] = 0
      dict["goals"] = 0
      return dict
   }
   const makeTrue = () => {
      init = true;
     }
    
     useEffect(() => {
      insertData()
     })

     const handleChange = (e) =>{
      
      var id = e.target.id-1
      if (!(id < 100)) id -= 100
      if(!isNaN(parseInt(e.target.value)) && !checkTime(id)){
        console.log("change")
        let newTipps = af;
        e.target.id-1 < 100 ? newTipps.games[e.target.id-1]["heimTore"] = parseInt(e.target.value) :
        newTipps.games[e.target.id-1-100]["auswTore"] = parseInt(e.target.value);
        setAf(newTipps)
        console.log(af)
      }
     }
     
  
     const handleOption1 = (e) =>{
      //let newStats = stats;
      //newStats[0] = e.value
     }
     const handleOption2 = (e) =>{
      //let newStats = stats;
      //newStats[1] = e.value
     }
     const handleOption3 = (e) =>{
      //let newStats = stats;
      //newStats[2] = e.value
     }
  
     const handleClick = async (e) => {
      e.preventDefault()
      let newTipps = af
      newTipps["groupWin"] = ""
      newTipps["elf"] = 0
      newTipps["goals"] = 0
      try {
          const res = await axiosInstance.put("/wm/update/"+user.username+"/0", newTipps)
          window.location.reload(false);
          window.scrollTo(0, 0);
      } catch (err) {
      }
    }
  
    const checkTime = (i) => {
      if (Date.now() > time[i]) {
        console.log(time[i])
        return true;
      }else{
        console.log("false")
        return false;
      }
    }
  
    const handleNewTipps = async() => {
      if(!createTipps){
        const newData = insertDefaultData()
        try {
            const res = await axiosInstance.post("/wm/create", newData)
            createTipps = true
            try {
              reFetch()
              insertData()
            } catch (err) {
            }
        } catch (err) {
        }
      }
    } 
  //functions end
    if(data.length > 0){
      return (
          <>
              {loading ? (
                  <h1>Loading...</h1>
              )
              :
              <Spieltag1>
                  {data.length > 0 ?
                      (
                        <>  <h1 style={{color: "white"}}>ACHTELFINALE</h1>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][0]}</p>
                                    <p>{dates[0][0]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[0].heimName}>{spiele[0][0][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 2 || (calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[0])} id={1} defaultValue={data[0].games[0].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 2 || (calculateScore(parseInt(data[0].games[0].heimTore), parseInt(data[0].games[0].auswTore), results[0][0][0], results[0][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[0])} id={101} defaultValue={data[0].games[0].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[0].auswName}>{spiele[0][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[0].heimName}>{spiele[0][0][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][0][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][0][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[0].auswName}>{spiele[0][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Keine Punkte weil ichs verkackt habe sry :D</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][1]}</p>
                                    <p>{dates[0][1]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[1].heimName}>{spiele[0][1][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 2 || (calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[1])} id={2} defaultValue={data[0].games[1].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 2 || (calculateScore(parseInt(data[0].games[1].heimTore), parseInt(data[0].games[1].auswTore), results[0][1][0], results[0][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[1])} id={102} defaultValue={data[0].games[1].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[1].auswName}>{spiele[0][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[1].heimName}>{spiele[0][1][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][1][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][1][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[1].auswName}>{spiele[0][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Hier hab ichs auch verkackt sryyyy</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][2]}</p>
                                    <p>{dates[0][2]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[2].heimName}>{spiele[0][2][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 2 || (calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[2])} id={3} defaultValue={data[0].games[2].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 2 || (calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[2])} id={103} defaultValue={data[0].games[2].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[2].auswName}>{spiele[0][2][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[1].heimName}>{spiele[0][2][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][2][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][2][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[2].auswName}>{spiele[0][2][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[2].heimTore), parseInt(data[0].games[2].auswTore), results[0][2][0], results[0][2][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][3]}</p>
                                    <p>{dates[0][3]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[3].heimName}>{spiele[0][3][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 2 || (calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[3])} id={4} defaultValue={data[0].games[3].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 2 || (calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[3])} id={104} defaultValue={data[0].games[3].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[3].auswName}>{spiele[0][3][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[3].heimName}>{spiele[0][3][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][3][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][3][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[3].auswName}>{spiele[0][3][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[3].heimTore), parseInt(data[0].games[3].auswTore), results[0][3][0], results[0][3][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][4]}</p>
                                    <p>{dates[0][4]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[4].heimName}>{spiele[0][4][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 2 || (calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[4])} id={5} defaultValue={data[0].games[4].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 2 || (calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[4])} id={105} defaultValue={data[0].games[4].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[4].auswName}>{spiele[0][4][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[4].heimName}>{spiele[0][4][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][4][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][4][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[4].auswName}>{spiele[0][4][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[4].heimTore), parseInt(data[0].games[4].auswTore), results[0][4][0], results[0][4][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][5]}</p>
                                    <p>{dates[0][5]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[5].heimName}>{spiele[0][5][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 2 || (calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[5])} id={6} defaultValue={data[0].games[5].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 2 || (calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][1], results[0][5][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[5])} id={106} defaultValue={data[0].games[5].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[5].auswName}>{spiele[0][5][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[5].heimName}>{spiele[0][5][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][5][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][5][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[5].auswName}>{spiele[0][5][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[5].heimTore), parseInt(data[0].games[5].auswTore), results[0][5][0], results[0][5][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][6]}</p>
                                    <p>{dates[0][6]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[6].heimName}>{spiele[0][6][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6][1]) === 2 || (calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[6])} id={7} defaultValue={data[0].games[6].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6]) === 2 || (calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[6])} id={107} defaultValue={data[0].games[6].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[6].auswName}>{spiele[0][6][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[6].heimName}>{spiele[0][6][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][6][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][6][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[6].auswName}>{spiele[0][6][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[6].heimTore), parseInt(data[0].games[6].auswTore), results[0][6][0], results[0][6][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[0][7]}</p>
                                    <p>{dates[0][7]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[7].heimName}>{spiele[0][7][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 2 || (calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[7])} id={8} defaultValue={data[0].games[7].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 2 || (calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[7])} id={108} defaultValue={data[0].games[7].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[7].auswName}>{spiele[0][7][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[7].heimName}>{spiele[0][7][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[0][7][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[0][7][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[7].auswName}>{spiele[0][7][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[7].heimTore), parseInt(data[0].games[7].auswTore), results[0][7][0], results[0][7][1])}</h3>
                            </Gamecontainer>
                            <h1 style={{color: "white"}}>VIERTELFINALE</h1>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[1][0]}</p>
                                    <p>{dates[1][0]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[8].heimName}>{spiele[1][0][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 2 || (calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[8])} id={9} defaultValue={data[0].games[8].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 2 || (calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[8])} id={109} defaultValue={data[0].games[8].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[8].auswName}>{spiele[1][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[8].heimName}>{spiele[1][0][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[1][0][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[1][0][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[8].auswName}>{spiele[1][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[8].heimTore), parseInt(data[0].games[8].auswTore), results[1][0][0], results[1][0][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[1][1]}</p>
                                    <p>{dates[1][1]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[9].heimName}>{spiele[1][1][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 2 || (calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[9])} id={10} defaultValue={data[0].games[9].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 2 || (calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[9])} id={110} defaultValue={data[0].games[9].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[9].auswName}>{spiele[1][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[9].heimName}>{spiele[1][1][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[1][1][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[1][1][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[9].auswName}>{spiele[1][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[9].heimTore), parseInt(data[0].games[9].auswTore), results[1][1][0], results[1][1][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[1][2]}</p>
                                    <p>{dates[1][2]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[10].heimName}>{spiele[1][2][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 2 || (calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[10])} id={11} defaultValue={data[0].games[10].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 2 || (calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[10])} id={111} defaultValue={data[0].games[10].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[10].auswName}>{spiele[1][2][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[10].heimName}>{spiele[1][2][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[1][2][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[1][2][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[10].auswName}>{spiele[1][2][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[10].heimTore), parseInt(data[0].games[10].auswTore), results[1][2][0], results[1][2][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[1][3]}</p>
                                    <p>{dates[1][3]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[11].heimName}>{spiele[1][3][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 2 || (calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[11])} id={12} defaultValue={data[0].games[11].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 2 || (calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[11])} id={112} defaultValue={data[0].games[11].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[11].auswName}>{spiele[1][3][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[11].heimName}>{spiele[1][3][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[1][3][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[1][3][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[11].auswName}>{spiele[1][3][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[11].heimTore), parseInt(data[0].games[11].auswTore), results[1][3][0], results[1][3][1])}</h3>
                            </Gamecontainer>
                            <h1 style={{color: "white"}}>HALBFINALE</h1>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[2][0]}</p>
                                    <p>{dates[2][0]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[12].heimName}>{spiele[2][0][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 2 || (calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[12])} id={13} defaultValue={data[0].games[12].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 2 || (calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[12])} id={113} defaultValue={data[0].games[12].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[12].auswName}>{spiele[2][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[12].heimName}>{spiele[2][0][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[2][0][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[2][0][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[12].auswName}>{spiele[2][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[12].heimTore), parseInt(data[0].games[12].auswTore), results[2][0][0], results[2][0][1])}</h3>
                            </Gamecontainer>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[2][1]}</p>
                                    <p>{dates[2][1]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[13].heimName}>{spiele[2][1][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 2 || (calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[13])} id={14} defaultValue={data[0].games[13].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 2 || (calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[13])} id={114} defaultValue={data[0].games[13].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[13].auswName}>{spiele[2][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[13].heimName}>{spiele[2][1][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[2][1][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[2][1][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[13].auswName}>{spiele[2][1][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[13].heimTore), parseInt(data[0].games[13].auswTore), results[2][1][0], results[2][1][1])}</h3>
                            </Gamecontainer>
                            <h1 style={{color: "white"}}>Spiel um Platz 3</h1>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[3][0]}</p>
                                    <p>{dates[3][0]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[14].heimName}>{spiele[3][0][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 2 || (calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[14])} id={15} defaultValue={data[0].games[14].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 2 || (calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[14])} id={115} defaultValue={data[0].games[14].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[14].auswName}>{spiele[3][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[14].heimName}>{spiele[3][0][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[3][0][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[3][0][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[14].auswName}>{spiele[3][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[14].heimTore), parseInt(data[0].games[14].auswTore), results[3][0][0], results[3][0][1])}</h3>
                            </Gamecontainer>
                            <h1 style={{color: "white"}}>FINALE</h1>
                            <Gamecontainer>
                                <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                                    <p>{clock[4][0]}</p>
                                    <p>{dates[4][0]}</p>
                                </Gamedate>
                                <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[15].heimName}>{spiele[4][0][0]}</p></Team1>
                                    <Result>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 2 || (calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[15])} id={16} defaultValue={data[0].games[15].heimTore} onChange={handleChange}></Inputresult>
                                        <Inputresult style={{backgroundColor: calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 4? 'green': ((calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 2 || (calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[3][0][0], results[3][0][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[15])} id={116} defaultValue={data[0].games[15].auswTore} onChange={handleChange}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[15].auswName}>{spiele[4][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                                <Game>
                                    <Team1><p id={data[0].games[15].heimName}>{spiele[4][0][0]}</p></Team1>
                                    <Result>
                                    <Inputresult readOnly={true} defaultValue={results[4][0][0]}></Inputresult>
                                    <Inputresult readOnly={true} defaultValue={results[4][0][1]}></Inputresult>
                                    </Result>
                                    <Team2><p id={data[0].games[15].auswName}>{spiele[4][0][1]}</p></Team2>
                                </Game>
                                <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(data[0].games[15].heimTore), parseInt(data[0].games[15].auswTore), results[4][0][0], results[4][0][1])}</h3>
                            </Gamecontainer>
                        </>
                      )
                      :
                      <h1>Daten sind aktuell nicht verfügbar</h1>
                  }
                {true ? <Bodybuttonwh onClick={handleClick}>Speichern</Bodybuttonwh>:""}
                {data.length && makeTrue()}
              </Spieltag1>
          }
          </>
      )
    }
    else{
      return (
          <Spieltag1>
              <h3 style={{padding: "15px"}}>Willst du mitmachen?</h3>
              <Yesbutton onClick={handleNewTipps}>Ja!</Yesbutton>
          </Spieltag1>
      )
    }
}
