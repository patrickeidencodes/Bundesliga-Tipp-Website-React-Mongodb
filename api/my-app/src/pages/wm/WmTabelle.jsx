// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { Spieltag1, Table1, Tablehead2, Tableentry, Place, Name, Points, Tableend2, Switch } from "../../components/utilities/Utilities.styled"
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext.js';
import { SumScore } from "../../functions/functions.js"


export const WmTabelle = (props) => {
  const { user } = useContext(AuthContext);
  const { data, loading, error, reFetch } = useFetch("/wm/all/"+props.group);
  const [calc, setCalc] = useState(false);
  const [scores, setScores] = useState([]);
  const [show, setShow] = useState([]);
  const [showNum, setShowNum] = useState(0);
  
  const winner = ["Niederlande", "England", "Argentinien", "Frankreich", "Japan", "Marokko", "Brasilien", "Portugal"]
  const elf = [2, 2, 4, 0, 2, 1, 0, 3]

  useEffect(() => {
    if(data.length >0 && !calc) calculateScores()
  })

  const calculateScores = () => {
    if(!calc){
      var showArray = []
      for (let i = 0; i < Math.ceil(data.length/10); i++) {
        if(i === 0) showArray.push(true)
        else showArray.push(false)
      }
      setShow(showArray)
      var items = {};
      if(!props.typ){
        data.map((user) => {
          var score = 0
          items[user.user] = 0
          user.games.map((tipp, j) => {
              let tempScore = SumScore(tipp.heimTore, parseInt(tipp.auswTore), props.res[props.group-1][j][0], props.res[props.group-1][j][1], score)
              items[user.user] = items[user.user] + tempScore
          })
        })
      }else{
        data.map((user, i) => {
          var score = 0
          items[user.user] = 0
          user.games.map((tipp, j) => {
              let tempScore = SumScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), props.ki[j][0], props.ki[j][1], score)
              items[user.user] = items[user.user] + tempScore
          })
        })
      }
      
      var keyValues = []
      var newScores = []

      for (var key in items) {
      keyValues.push([ key, items[key] ])
      }
      keyValues.sort(function compare(kv1, kv2) {
          return kv2[1] - kv1[1]
      })
      for (const [key, value] of Object.entries(keyValues)) {
        newScores.push(value)
      }
      
      if(newScores[0][1] == newScores[1][1]){
        newScores[0][1] = newScores[0][1] + 2;
        newScores[1][1] = newScores[1][1] + 2;
        keyValues[0][0] = keyValues[0][0] + " + 2 Punkte!"
        keyValues[1][0] = keyValues[1][0] + " + 2 Punkte!"
      }else{
        newScores[0][1] = newScores[0][1] + 4;
        keyValues[0][0] = keyValues[0][0] + " + 4 Punkte!"
      }
    
      setScores(newScores)
      setCalc(true)
    }
  }
  const handleLeft = () => {
    if(showNum > 0){
      var newShow = show
      newShow[showNum] = false
      newShow[showNum-1] = true
      setShow(newShow)
      setShowNum(showNum-1)
    }
  }

  const handleRight = () => {
    if(showNum < Math.ceil(data.length/10)-1){
      var newShow = show
      newShow[showNum] = false
      newShow[showNum+1] = true
      setShow(newShow)
      setShowNum(showNum+1)
    }
  }
  return (
    <>
    {!calc ? (
      <h1>Loading...</h1>
    ) : (
      <Spieltag1 props>
        <Table1>
            <Tablehead2>
                <h2 style={{fontSize: "17px"}}>Tabelle der {props.group}. Gruppe</h2>
            </Tablehead2>
            <Tableentry>
                <Place>Platzierung</Place>
                <Name style={{position: "relative", textAlign: "center"}}>Name</Name>
                <Points>Punkte</Points>
            </Tableentry>
                {data.length && scores.map((user2, i) => (
                  <div>
                      {show[Math.floor(i/10)] && <Tableentry key={i} style={{backgroundColor: user2[0] === user.username? 'lightgreen': user2[0] === "KI"? 'plum':'white'}}>
                          <Place style={{backgroundColor: user2[0] === user.username? 'lightgreen': user2[0] === "KI"? 'plum':'white'}}>{i+1}.</Place>
                          <Name style={{backgroundColor: user2[0] === user.username? 'lightgreen': user2[0] === "KI"? 'plum':'white'}}>{user2[0]}</Name>
                          <Points style={{backgroundColor: user2[0] === user.username? 'lightgreen': user2[0] === "KI"? 'plum':'white'}}>{user2[1]}</Points>
                      </Tableentry>}
                  </div>
                  ))
                }
            <Tableend2>
              <Switch id={0} onClick={handleLeft}>{"<"}</Switch>
              <Switch id={0} onClick={handleRight}>{">"}</Switch>
            </Tableend2>
        </Table1>
      </Spieltag1> 
      
    )
    }
    </>
  )
}
