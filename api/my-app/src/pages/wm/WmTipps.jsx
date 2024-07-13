// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { Bodybuttonwh, Yesbutton } from './Wm.styled'
import { Spieltag1, Gamedate, Inputresult, Gamecontainer, Game, Team1, Team2, Result } from "../../components/utilities/Utilities.styled"
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext.js'
import { axiosInstance } from '../../utils/config.js';
import { calculateScore } from "../../functions/functions.js"
import { WmTabelle } from './WmTabelle'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const WmTipps = (props) => {
  const { user } = useContext(AuthContext);
  const { data, loading, error, reFetch } = useFetch("/wm/find/"+user.username+"/"+props.group);
  var init = false;
  var createTipps = false;
  const results = [
    [[0,2], [0,2], [1,3], [1,1], [2,0], [1,2]],
    [[6,2], [1,1], [0,2], [0,0], [0,3], [0,1]],
    [[1,2], [0,0], [2,0], [2,0], [0,2], [1,2]],
    [[0,0], [4,1], [0,1], [2,1], [1,0], [1,0]],
    [[1,2], [7,0], [0,2], [1,1], [2,1], [2,4]],
    [[0,0], [1,0], [0,2], [4,1], [0,0], [1,2]],
    [[1,0], [2,0], [3,3], [1,0], [1,0], [2,3]],
    [[0,0], [3,2], [2,3], [2,0], [2,1], [0,2]]
  ]
  const time = [
    ["1668960000000", "1669046400000", "1669381200000", "1669392000000", "1669734000000", "1669734000000"],
    ["1669035600000", "1669057200000", "1669370400000", "1669402800000", "1669748400000", "1669748400000"],
    ["1669111200000", "1669132800000", "1669467600000", "1669489200000", "1669834800000", "1669834800000"],
    ["1669122000000", "1669143600000", "1669456800000", "1669478400000", "1669820400000", "1669820400000"],
    ["1669208400000", "1669219200000", "1669543200000", "1669575600000", "1669921200000", "1669921200000"],
    ["1669197600000", "1669230000000", "1669554000000", "1669564800000", "1669906800000", "1669906800000"],
    ["1669284000000", "1669316400000", "1669629600000", "1669651200000", "1670007600000", "1670007600000"],
    ["1669294800000", "1669305600000", "1669640400000", "1669662000000", "1669993200000", "1669993200000"]
  ]
  const spiele = [
    [["Katar", "Ecuador"], ["Sénégal", "Niederlande"], ["Katar", "Sénégal"], ["Niederlande", "Ecuador"], ["Niederlande", "Katar"], ["Ecuador", "Sénégal"]],
    [["England", "Iran"], ["USA", "Wales"], ["Wales", "Iran"], ["England", "USA"], ["Wales", "England"], ["Iran", "USA"]],
    [["Argentinien", "Saudi-Arabien"], ["Mexiko", "Polen"], ["Polen", "Saudi-Arabien"], ["Argentinien", "Mexiko"], ["Polen", "Argentinien"], ["Saudi-Arabien", "Mexiko"]],
    [["Dänemark", "Tunesien"], ["Frankreich", "Australien"], ["Tunesien", "Australien"], ["Frankreich", "Dänemark"], ["Tunesien", "Frankreich"], ["Australien", "Dänemark"]],
    [["Deutschland", "Japan"], ["Spanien", "Costa Rica"], ["Japan", "Costa Rica"], ["Spanien", "Deutschland"], ["Japan", "Spanien"], ["Costa Rica", "Deutschland"]],
    [["Marokko", "Kroatien"], ["Belgien", "Kanada"], ["Belgien", "Marokko"], ["Kroatien", "Kanada"], ["Kroatien", "Belgien"], ["Kanada", "Marokko"]],
    [["Schweiz", "Kamerun"], ["Brasilien", "Serbien"], ["Kamerun", "Serbien"], ["Brasilien", "Schweiz"], ["Kamerun", "Brasilien"], ["Serbien", "Schweiz"]],
    [["Uruguay", "Südkorea"], ["Portugal", "Ghana"], ["Südkorea", "Ghana"], ["Portugal", "Uruguay"], ["Südkorea", "Portugal"], ["Ghana", "Uruguay"]]
  ]
  const teams = [
    ["Katar", "Ecuador", "Sénégal", "Niederlande"],
    ["England", "Iran", "USA", "Wales"],
    ["Argentinien", "Saudi-Arabien", "Mexiko", "Polen"],
    ["Dänemark", "Tunesien", "Frankreich", "Australien"],
    ["Deutschland", "Japan", "Spanien", "Costa Rica"],
    ["Marokko", "Kroatien", "Belgien", "Kanada"],
    ["Schweiz", "Kamerun", "Brasilien", "Serbien"],
    ["Uruguay", "Südkorea", "Portugal", "Ghana"]
  ]
  const elf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const goal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const dates = [
    ["20.11.2022", "21.11.2022", "25.11.2022", "25.11.2022", "29.11.2022", "29.11.2022"],
    ["21.11.2022", "21.11.2022", "25.11.2022", "25.11.2022", "29.11.2022", "29.11.2022"],
    ["22.11.2022", "22.11.2022", "26.11.2022", "26.11.2022", "30.11.2022", "30.11.2022"],
    ["22.11.2022", "22.11.2022", "26.11.2022", "26.11.2022", "30.11.2022", "30.11.2022"],
    ["23.11.2022", "23.11.2022", "27.11.2022", "27.11.2022", "01.12.2022", "01.12.2022"],
    ["23.11.2022", "23.11.2022", "27.11.2022", "27.11.2022", "01.12.2022", "01.12.2022"],
    ["24.11.2022", "24.11.2022", "28.11.2022", "28.11.2022", "02.12.2022", "02.12.2022"],
    ["24.11.2022", "24.11.2022", "28.11.2022", "28.11.2022", "02.12.2022", "02.12.2022"]
  ]
  const clock = [
    ["17:00", "17:00", "14:00", "17:00", "16:00", "16:00"],
    ["14:00", "20:00", "11:00", "20:00", "20:00", "20:00"],
    ["11:00", "17:00", "14:00", "20:00", "20:00", "20:00"],
    ["14:00", "20:00", "11:00", "17:00", "16:00", "16:00"],
    ["14:00", "17:00", "11:00", "20:00", "20:00", "20:00"],
    ["11:00", "20:00", "14:00", "17:00", "16:00", "16:00"],
    ["11:00", "20:00", "11:00", "17:00", "20:00", "20:00"],
    ["14:00", "17:00", "14:00", "20:00", "16:00", "16:00"]
  ]
  const [stats, setStats] = useState(["", 0, 0])
  const [tipps, setTipps] = useState({
    games: [
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        },
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        },
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        },
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        },
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        },
        {
            "heimName": undefined,
            "heimTore": undefined,
            "auswName": undefined,
            "auswTore": undefined
        }
    ]
  })

  //functions start
   
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
        let newTipps = tipps
        data[0].games.map((tipp, i) => {
            newTipps.games[i]["heimName"] = tipp.heimName;
            newTipps.games[i]["heimTore"] = parseInt(tipp.heimTore);
            newTipps.games[i]["auswName"] = tipp.auswName;
            newTipps.games[i]["auswTore"] = parseInt(tipp.auswTore);
        });
        let newStats = stats
        newStats[0] = data[0].groupWin
        newStats[1] = data[0].elf
        newStats[2] = data[0].goals
        setStats(newStats)
        setTipps(newTipps)
    }
}

const insertDefaultData = () => {
    var dict = {}
    const d = new Date();
    dict["group"] = props.group
    dict["date"] = d.getDate().toString()+"."+(d.getMonth()+1).toString()+"."+d.getFullYear().toString()
    dict["user"] = user.username
    dict["games"] = []
    spiele[props.group-1].map((game, i) => {
      var newGame = {}
      newGame["heimName"] = game[0];
      newGame["heimTore"] = 0;
      newGame["auswName"] = game[1];
      newGame["auswTore"] = 0;
      dict["games"].push(newGame);
    });
    dict["groupWin"] = ""
    dict["elf"] = 0
    dict["goals"] = 0
    console.log(dict)
    return dict
 }
 const makeTrue = () => {
    init = true;
   }
  
   useEffect(() => {
    insertData()
   })

   const handleChange = (e) =>{
    var id = e.target.id
    if (!(id < 100)) id -= 100
    if(!isNaN(parseInt(e.target.value)) && !checkTime(id)){
      let newTipps = tipps;
      e.target.id < 100 ? newTipps.games[e.target.id]["heimTore"] = parseInt(e.target.value) :
      newTipps.games[e.target.id-100]["auswTore"] = parseInt(e.target.value);
      setTipps(newTipps)
    }
   }

   const handleOption1 = (e) =>{
    let newStats = stats;
    newStats[0] = e.value
   }
   const handleOption2 = (e) =>{
    let newStats = stats;
    newStats[1] = e.value
   }
   const handleOption3 = (e) =>{
    let newStats = stats;
    newStats[2] = e.value
   }

   const handleClick = async (e) => {
    e.preventDefault()
    let newTipps = tipps
    newTipps["groupWin"] = stats[0]
    newTipps["elf"] = stats[1]
    newTipps["goals"] = stats[2]
    try {
        const res = await axiosInstance.put("/wm/update/"+user.username+"/"+props.group, newTipps)
        window.location.reload(false);
        window.scrollTo(0, 0);
    } catch (err) {
    }
  }

  const checkTime = (i) => {
    if (Date.now() > time[props.group-1][i]) {
      return true;
    }else{
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
                <Gamecontainer>
                  <h2 style={{marginBottom: "20px", fontSize: "17px"}}>Geschlossen!</h2>
                  <h2 style={{marginBottom: "20px", fontSize: "17px"}}>Wer gewinnt die Gruppe?</h2>
                  <div style={{marginBottom: "20px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown readOnly={true} id={"winner"} options={teams[props.group-1]}  placeholder={data[0].groupWin}/>
                  </div>
                  <h2 style={{marginBottom: "20px", fontSize: "17px"}}>Wie viele 11 Meter wird es geben?</h2>
                  <div style={{marginBottom: "20px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown id={"eleven"} options={elf} placeholder={data[0].elf} />
                  </div>
                  <h2 style={{marginBottom: "20px", fontSize: "17px"}}>Wie viele Tore werden fallen?</h2>
                  <div style={{marginBottom: "20px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Dropdown id={"goals"} options={goal} placeholder={data[0].goals} />
                  </div>
                </Gamecontainer>
                {data.length > 0 ?
                    (data[0].games?.map((tipp, i) => (
                        <Gamecontainer>
                          <Gamedate style={{display: "flex", justifyContent: "space-between"}}>
                            <p>{clock[props.group-1][i]}</p>
                            <p>{dates[props.group-1][i]}</p>
                          </Gamedate>
                          <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                          <Game>
                            <Team1><p id={tipp.heimName}>{spiele[props.group-1][i][0]}</p></Team1>
                            <Result>
                              <Inputresult style={{backgroundColor: calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 4? 'green': ((calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 2 || (calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[props.group-1][i])} id={i} defaultValue={tipp.heimTore} onChange={handleChange}></Inputresult>
                              <Inputresult style={{backgroundColor: calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 4? 'green': ((calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 2 || (calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group-1][i][0], results[props.group-1][i][1]) === 1)? 'orange':'red'))}} readOnly={checkTippTime(time[props.group-1][i])} id={i+100} defaultValue={tipp.auswTore} onChange={handleChange}></Inputresult>
                            </Result>
                            <Team2><p id={tipp.auswName}>{spiele[props.group-1][i][1]}</p></Team2>
                          </Game>
                          <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                          <Game>
                            <Team1><p id={tipp.heimName}>{spiele[props.group-1][i][0]}</p></Team1>
                            <Result>
                              <Inputresult readOnly={true} defaultValue={results[props.group-1][i][0]}></Inputresult>
                              <Inputresult readOnly={true} defaultValue={results[props.group-1][i][1]}></Inputresult>
                            </Result>
                            <Team2><p id={tipp.auswName}>{spiele[props.group-1][i][1]}</p></Team2>
                          </Game>
                          <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.group - 1][i][0], results[props.group - 1][i][1])}</h3>
                        </Gamecontainer>
                    )))
                    :
                    <h1>Daten sind aktuell nicht verfügbar</h1>
                }
              {!checkTippTime(time[props.group-1][5]) ? <Bodybuttonwh onClick={handleClick}>Speichern</Bodybuttonwh>:""}
              <WmTabelle group={props.group} res={results}/>
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
