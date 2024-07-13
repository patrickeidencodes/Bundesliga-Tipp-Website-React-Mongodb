// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Bodybuttonwh, Yesbutton } from '../hauptBody/Body.styled'
import { Spieltag1, Gamedate, Inputresult, Gamecontainer, Game, Team1, Team2, Result } from "./Utilities.styled"
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext.js';
import { axiosInstance } from '../../utils/config.js';
import { calculateScore } from "../../functions/functions.js"
import { SpieltagTabelle } from "./SpieltagTabelle.jsx"

export const Spieltagtipps = (props) => {

  //variables start
  const { user } = useContext(AuthContext);
  const { data, loading, error, reFetch } = useFetch("/tipps/find/"+user.username+"/"+props.day);
  var init = false;
  var createTipps = false;
  const [post, setPost] = useState(Date.now());

  const navigate = useNavigate()
  var score = 0
  const results = [
    [[1, 6], [3, 1], [3, 1], [2, 2], [1, 2], [0, 4], [1, 0], [1, 1], [3, 1]],
    [[1 ,3], [1, 2], [2, 2], [3, 2], [1, 1], [2, 2], [2, 2], [0, 0], [2, 0]],
    [[1,0], [2,3], [0,3], [0,0], [1,2], [0,1], [2,1], [1,1], [0,7]],
    [[1,0], [2,0], [0,3], [1,0], [0,1], [1,6], [1,1], [0,0], [3,4]],
    [[1,0], [2,3], [1,1], [2,4], [0,2], [1,1], [4,0], [0,2], [0,1]],
    [[0,1], [2,2], [3,0], [4,1], [0,1], [2,2], [3,1], [0,1], [0,0]],
    [[1,1], [1,0], [1,1], [1,3], [1,0], [3,0], [2,0], [1,1], [0,0]],
    [[4,0], [4,0], [2,1], [3,2], [2,0], [3,2], [5,1], [1,1], [2,3]],
    [[1,2], [4,0], [1,1], [3,0], [1,1], [2,2], [5,2], [2,2], [0,1]],
    [[0,3], [5,1], [2,2], [4,1], [0,2], [3,2], [3,2], [2,0], [5,0]],
    [[5,0], [5,0], [2,2], [2,0], [0,2], [3,3], [1,3], [2,1], [2,1]],
    [[1,0], [6,2], [2,0], [4,0], [2,1], [1,2], [2,1], [0,2], [1,1]],
    [[3,1], [3,0], [0,3], [1,3], [1,2], [2,3], [2,1], [5,0], [2,0]],
    [[2,0], [6,1], [2,1], [2,1], [1,2], [3,1], [2,2], [4,2], [1,0]],
    [[4,2], [2,0], [1,2], [0,1], [2,0], [1,2], [0,2], [1,1], [4,1]],
    [[1,1], [3,1], [3,0], [6,0], [3,1], [1,1], [7,1], [4,3], [2,3]],
    [[1,6], [1,1], [2,2], [0,5], [1,2], [2,0], [1,1], [1,0], [1,2]],
    [[2,1], [3,1], [5,2], [1,4], [0,2], [2,1], [1,1], [0,0], [0,2]],
    [[1,0], [5,1], [2,1], [0,0], [3,0], [5,2], [0,0], [0,2], [2,4]],
    [[0,0], [3,0], [2,1], [3,1], [1,3], [0,2], [1,2], [4,1], [3,0]],
    [[,], [,], [,], [,], [,], [,], [,], [,], [,]]
  ]
  const ki = [
    [[1,1], [1,3], [4,3], [5,1], [1,1], [1,0], [2,2], [1,2], [1,0]],
    [[2,4], [1,1], [1,1], [5,0], [1,3], [2,3], [2,1], [2,2], [3,1]],
    [[2,1], [3,1], [4,1], [2,1], [3,3], [1,4], [1,2], [3,0], [1,4]],
    [[0,0], [3,0], [1,3], [5,2], [1,0], [0,3], [4,0], [1,1], [1,1]],
    [[2,1], [0,1], [1,2], [3,1], [1,1], [2,1], [3,3], [3,1], [1,0]],
    [[5,1], [0,0], [4,0], [0,2], [3,0], [3,0], [1,2], [3,3], [0,2]],
    [[2,1], [1,4], [3,0], [2,2], [2,1], [1,0], [0,1], [1,1], [1,2]],
    [[2,0], [3,2], [0,0], [1,3], [0,0], [2,1], [5,0], [0,5], [1,1]],
    [[1,1], [3,1], [0,1], [0,3], [2,1], [1,2], [2,0], [3,3], [1,2]],
    [[2,2], [1,0], [2,2], [0,2], [1,3], [4,0], [1,1], [1,1], [3,1]],
    [[4,0], [1,1], [3,0], [2,1], [0,2], [2,5], [3,1], [1,2], [2,0]],
    [[1,0], [5,1], [1,3], [4,1], [2,1], [3,5], [0,1], [3,0], [3,1]],
    [[1,1], [1,0], [1,0], [0,1], [2,2], [0,2], [3,2], [3,2], [2,1]],
    [[1,1], [2,1], [1,2], [2,3], [0,2], [1,2], [2,3], [2,2], [1,2]],
    [[1,4], [2,0], [1,3], [2,0], [2,4], [0,1], [2,3], [3,2], [2,0]],
    [[1,4], [1,0], [2,2], [1,1], [1,2], [1,0], [1,2], [4,1], [2,1]],
    [[1,0], [4,0], [4,1], [1,1], [0,3], [1,0], [2,1], [2,0], [0,2]],
    [[2,0], [3,2], [2,0], [4,0], [2,3], [1,5], [5,0], [1,0], [1,1]],   
    [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]], 
    [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
    [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
  ]
  const time = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["1666377000000", "1666377000000", "1666377000000", "1666377000000", "1666377000000", "1666377000000", "1666377000000", "1666377000000", "1666377000000"],
    ["1666377000000", "1666445400000", "1666445400000", "1666445400000", "1666445400000", "1666445400000", "1666456200000", "1666531800000", "1666539000000"],
    ["1666981800000", "1667050200000", "1667050200000", "1667050200000", "1667050200000", "1667061000000", "1667140200000", "1667147400000", "1667154600000"],
    ["1667590200000", "1667658600000", "1667658600000", "1667658600000", "1667658600000", "1667658600000", "1667669400000", "1667745000000", "1667752200000"],
    ["1667928600000", "1667935800000", "1667935800000", "1667935800000", "1668015000000", "1668022200000", "1668022200000", "1668022200000", "1668022200000"],
    ["1668195000000", "1668263400000", "1668263400000", "1668263400000", "1668263400000", "1668263400000", "1668274200000", "1668349800000", "1668357000000"],
    ["1674243000000", "1674311400000", "1674311400000", "1674311400000", "1674311400000", "1674311400000", "1674322200000", "1674397800000", "1674405000000"],
    ["1674581400000", "1674588600000", "1674588600000", "1674588600000", "1674667800000", "1674675000000", "1674675000000", "1674675000000", "1674675000000"],
    ["1674847800000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674927000000", "1675002600000", "1675009800000"],
    ["1674847800000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674927000000", "1675002600000", "1675009800000"],
    ["1674847800000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674916200000", "1674927000000", "1675002600000", "1675009800000"],
    ["1676662200000", "1676730600000", "1676730600000", "1676730600000", "1676730600000", "1676741400000", "1676817000000", "1676824200000", "1676831400000"],
  ]
  //[[2,2], [1,0], [2,2], [0,2], [2,0], [4,0], [1,1], [1,1], [3,1]]
  //[[4,0], [1,1], [3,0], [2,1], [0,2], [2,5], [3,1], [1,2], [2,0]]
  //[[,], [,], [,], [,], [,], [,], [,], [,], [,]]

  const spiele = [
    [["Eintracht Frankfurt", "FC Bayern München"], ["1.FC Union Berlin", "Hertha BSC"], ["Gladbach", "TSG Hoffenheim"], ["VFL Wolfsburg", "SV Werder Bremen"], 
    ["VFL Bochum", "1.FSV Mainz 05"], ["FC Augsburg", "SC Freiburg"], ["Borussia Dortmund", "Bayer Leverkusen"], ["VFB Stuttgart", "RB Leipzig"], 
    ["1.FC Köln", "Schalke 04"]],

    [["SC Freiburg", "Borussia Dortmund"], ["Bayer Leverkusen", "FC Augsburg"], ["RB Leipzig", "1.FC Köln"], ["TSG Hoffenheim", "VFL Bochum"], 
    ["Hertha BSC", "Eintracht Frankfurt"], ["SV Werder Bremen", "VFB Stuttgart"], ["Schalke 04", "Gladbach"], ["1.FSV Mainz 05", "1.FC Union Berlin"], 
    ["FC Bayern München", "VFL Wolfsburg"]],

    [["Gladbach", "Hertha BSC"], ["Borussia Dortmund", "SV Werder Bremen"], ["Bayer Leverkusen", "TSG Hoffenheim"], ["VFL Wolfsburg", "Schalke 04"], 
    ["FC Augsburg", "1.FSV Mainz 05"], ["VFB Stuttgart", "SC Freiburg"], ["1.FC Union Berlin", "RB Leipzig"], ["Eintracht Frankfurt", "1.FC Köln"], 
    ["VFL Bochum", "FC Bayern München"]],

    [["SC Freiburg", "VFL Bochum"], ["RB Leipzig", "VFL Wolfsburg"], ["1.FSV Mainz 05", "Bayer Leverkusen"], ["TSG Hoffenheim", "FC Augsburg"], 
    ["Hertha BSC", "Borussia Dortmund"], ["Schalke 04", "1.FC Union Berlin"], ["FC Bayern München", "Gladbach"], 
    ["1.FC Köln", "VFB Stuttgart"], ["SV Werder Bremen", "Eintracht Frankfurt"]],

    [["Borussia Dortmund", "TSG Hoffenheim"], ["Bayer Leverkusen", "SC Freiburg"], ["1.FC Union Berlin", "FC Bayern München"], ["VFL Wolfsburg", "1.FC Köln"], 
    ["VFL Bochum", "SV Werder Bremen"], ["VFB Stuttgart", "Schalke 04"], ["Eintracht Frankfurt", "RB Leipzig"], ["FC Augsburg", "Hertha BSC"],
    ["Gladbach", "1.FSV Mainz 05"]],
    
    [["SV Werder Bremen", "FC Augsburg"], ["FC Bayern München", "VFB Stuttgart"], ["RB Leipzig", "Borussia Dortmund"], ["TSG Hoffenheim", "1.FSV Mainz 05"], 
    ["Eintracht Frankfurt", "VFL Wolfsburg"], ["Hertha BSC", "Bayer Leverkusen"], ["Schalke 04", "VFL Bochum"], 
    ["1.FC Köln", "1.FC Union Berlin"], ["SC Freiburg", "Gladbach"]],
    
    [["1.FSV Mainz 05", "Hertha BSC"], ["FC Augsburg", "FC Bayern München"], ["Bayer Leverkusen", "SV Werder Bremen"], ["VFB Stuttgart", "Eintracht Frankfurt"], 
    ["Borussia Dortmund", "Schalke 04"], ["Gladbach", "RB Leipzig"], ["1.FC Union Berlin", "VFL Wolfsburg"], 
    ["VFL Bochum", "1.FC Köln"], ["TSG Hoffenheim", "SC Freiburg"]],
    
    [["FC Bayern München", "Bayer Leverkusen"], ["RB Leipzig", "VFL Bochum"], ["SC Freiburg", "1.FSV Mainz 05"], ["1.FC Köln", "Borussia Dortmund"], 
    ["Eintracht Frankfurt", "1.FC Union Berlin"], ["VFL Wolfsburg", "VFB Stuttgart"], ["SV Werder Bremen", "Gladbach"], 
    ["Hertha BSC", "TSG Hoffenheim"], ["Schalke 04", "FC Augsburg"]],

    [["TSG Hoffenheim", "SV Werder Bremen"], ["Bayer Leverkusen", "Schalke 04"], ["1.FSV Mainz 05", "RB Leipzig"], ["VFL Bochum", "Eintracht Frankfurt"], 
    ["FC Augsburg", "VFL Wolfsburg"], ["Borussia Dortmund", "FC Bayern München"], ["Gladbach", "1.FC Köln"], 
    ["Hertha BSC", "SC Freiburg"], ["VFB Stuttgart", "1.FC Union Berlin"]],

    [["Schalke 04", "TSG Hoffenheim"], ["Eintracht Frankfurt", "Bayer Leverkusen"], ["VFL Wolfsburg", "Gladbach"], ["VFB Stuttgart", "VFL Bochum"], 
    ["SV Werder Bremen", "1.FSV Mainz 05"], ["RB Leipzig", "Hertha BSC"], ["1.FC Köln", "FC Augsburg"], 
    ["1.FC Union Berlin", "Borussia Dortmund"], ["FC Bayern München", "SC Freiburg"]],

    [["1.FSV Mainz 05", "1.FC Köln"], ["Borussia Dortmund", "VFB Stuttgart"], ["Bayer Leverkusen", "VFL Wolfsburg"], ["SC Freiburg", "SV Werder Bremen"], 
    ["TSG Hoffenheim", "FC Bayern München"], ["FC Augsburg", "RB Leipzig"], ["Gladbach", "Eintracht Frankfurt"], 
    ["VFL Bochum", "1.FC Union Berlin"], ["Hertha BSC", "Schalke 04"]],

    [["SV Werder Bremen", "Hertha BSC"], ["FC Bayern München", "1.FSV Mainz 05"], ["RB Leipzig", "Bayer Leverkusen"], ["VFL Wolfsburg", "VFL Bochum"], 
    ["VFB Stuttgart", "FC Augsburg"], ["Eintracht Frankfurt", "Borussia Dortmund"], ["1.FC Union Berlin", "Gladbach"], 
    ["Schalke 04", "SC Freiburg"], ["1.FC Köln", "TSG Hoffenheim"]],

    [["Gladbach", "VFB Stuttgart"], ["Borussia Dortmund", "VFL Bochum"], ["1.FSV Mainz 05", "VFL Wolfsburg"], ["TSG Hoffenheim", "RB Leipzig"], 
    ["FC Augsburg", "Eintracht Frankfurt"], ["Hertha BSC", "FC Bayern München"], ["SV Werder Bremen", "Schalke 04"], 
    ["Bayer Leverkusen", "1.FC Union Berlin"], ["SC Freiburg", "1.FC Köln"]],

    [["VFL Wolfsburg", "Borussia Dortmund"], ["FC Bayern München", "SV Werder Bremen"], ["VFL Bochum", "Gladbach"], ["VFB Stuttgart", "Hertha BSC"], 
    ["1.FC Köln", "Bayer Leverkusen"], ["RB Leipzig", "SC Freiburg"], ["1.FC Union Berlin", "FC Augsburg"], 
    ["Eintracht Frankfurt", "TSG Hoffenheim"], ["Schalke 04", "1.FSV Mainz 05"]],

    [["Gladbach", "Borussia Dortmund"], ["Bayer Leverkusen", "VFB Stuttgart"], ["TSG Hoffenheim", "VFL Wolfsburg"], ["FC Augsburg", "VFL Bochum"], 
    ["Hertha BSC", "1.FC Köln"], ["SV Werder Bremen", "RB Leipzig"], ["Schalke 04", "FC Bayern München"], 
    ["1.FSV Mainz 05", "Eintracht Frankfurt"], ["SC Freiburg", "1.FC Union Berlin"]],

    [["RB Leipzig", "FC Bayern München"], ["1.FC Union Berlin", "TSG Hoffenheim"], ["Eintracht Frankfurt", "Schalke 04"], ["VFL Wolfsburg", "SC Freiburg"], 
    ["VFL Bochum", "Hertha BSC"], ["VFB Stuttgart", "1.FSV Mainz 05"], ["1.FC Köln", "SV Werder Bremen"], 
    ["Borussia Dortmund", "FC Augsburg"], ["Gladbach", "Bayer Leverkusen"]],

    [["Schalke 04", "RB Leipzig"], ["FC Bayern München", "1.FC Köln"], ["TSG Hoffenheim", "VFB Stuttgart"], ["Hertha BSC", "VFL Wolfsburg"], 
    ["1.FSV Mainz 05", "Borussia Dortmund"], ["Bayer Leverkusen", "VFL Bochum"], ["SC Freiburg", "Eintracht Frankfurt"], 
    ["FC Augsburg", "Gladbach"], ["SV Werder Bremen", "1.FC Union Berlin"]],

    [["RB Leipzig", "VFB Stuttgart"], ["SC Freiburg", "FC Augsburg"], ["1.FSV Mainz 05", "VFL Bochum"], ["TSG Hoffenheim", "Gladbach"], 
    ["Hertha BSC", "1.FC Union Berlin"], ["SV Werder Bremen", "VFL Wolfsburg"], ["FC Bayern München", "Eintracht Frankfurt"], 
    ["Schalke 04", "1.FC Köln"], ["Bayer Leverkusen", "Borussia Dortmund"]],
    
    [["FC Augsburg", "Bayer Leverkusen"], ["Borussia Dortmund", "SC Freiburg"], ["1.FC Union Berlin", "1.FSV Mainz 05"], ["1.FC Köln", "RB Leipzig"], 
    ["Eintracht Frankfurt", "Hertha BSC"], ["VFL Bochum", "TSG Hoffenheim"], ["Gladbach", "Schalke 04"], 
    ["VFB Stuttgart", "SV Werder Bremen"], ["VFL Wolfsburg", "FC Bayern München"]],

    [["Schalke 04", "VFL Wolfsburg"], ["FC Bayern München", "VFL Bochum"], ["SC Freiburg", "VFB Stuttgart"], ["1.FSV Mainz 05", "FC Augsburg"], 
    ["TSG Hoffenheim", "Bayer Leverkusen"], ["SV Werder Bremen", "Borussia Dortmund"], ["RB Leipzig", "1.FC Union Berlin"], 
    ["Hertha BSC", "Gladbach"], ["1.FC Köln", "Eintracht Frankfurt"]],

    [["FC Augsburg", "TSG Hoffenheim"], ["Gladbach", "FC Bayern München"], ["VFL Wolfsburg", "RB Leipzig"], ["VFL Bochum", "SC Freiburg"], 
    ["VFB Stuttgart", "1.FC Köln"], ["Eintracht Frankfurt", "SV Werder Bremen"], ["1.FC Union Berlin", "Schalke 04"], 
    ["Borussia Dortmund", "Hertha BSC"], ["Bayer Leverkusen", "1.FSV Mainz 05"]]
]

const dates = [
  ["Freitag 05.08.2022", "Samstag 06.08.2022", "Samstag 06.08.2022", "Samstag 06.08.2022", "Samstag 06.08.2022", "Samstag 06.08.2022", "Sonntag 06.08.2022", "Sonntag 07.08.2022", "Sonntag 07.08.2022"],
  ["Freitag 12.08.2022", "Samstag 13.08.2022", "Samstag 13.08.2022", "Samstag 13.08.2022", "Samstag 13.08.2022", "Samstag 13.08.2022", "Sonntag 13.08.2022", "Sonntag 14.08.2022", "Sonntag 14.08.2022"],
  ["Freitag 19.08.2022", "Samstag 20.08.2022", "Samstag 20.08.2022", "Samstag 20.08.2022", "Samstag 20.08.2022", "Samstag 20.08.2022", "Sonntag 20.08.2022", "Sonntag 21.08.2022", "Sonntag 21.08.2022"],
  ["Freitag 26.08.2022", "Samstag 27.08.2022", "Samstag 27.08.2022", "Samstag 27.08.2022", "Samstag 27.08.2022", "Samstag 27.08.2022", "Sonntag 27.08.2022", "Sonntag 28.08.2022", "Sonntag 28.08.2022"],
  ["Freitag 02.09.2022", "Samstag 03.09.2022", "Samstag 03.09.2022", "Samstag 03.09.2022", "Samstag 03.09.2022", "Samstag 03.09.2022", "Sonntag 03.09.2022", "Sonntag 04.09.2022", "Sonntag 04.09.2022"],
  ["Freitag 09.09.2022", "Samstag 10.09.2022", "Samstag 10.09.2022", "Samstag 10.09.2022", "Samstag 10.09.2022", "Samstag 10.09.2022", "Sonntag 10.09.2022", "Sonntag 11.09.2022", "Sonntag 11.09.2022"],
  ["Freitag 16.09.2022", "Samstag 17.09.2022", "Samstag 17.09.2022", "Samstag 17.09.2022", "Samstag 17.09.2022", "Samstag 17.09.2022", "Sonntag 18.09.2022", "Sonntag 18.09.2022", "Sonntag 18.09.2022"],
  ["Freitag 30.09.2022", "Samstag 01.10.2022", "Samstag 01.10.2022", "Samstag 01.10.2022", "Samstag 01.10.2022", "Samstag 01.10.2022", "Sonntag 01.10.2022", "Sonntag 02.10.2022", "Sonntag 02.10.2022"],
  ["Freitag 07.10.2022", "Samstag 08.10.2022", "Samstag 08.10.2022", "Samstag 08.10.2022", "Samstag 08.10.2022", "Samstag 08.10.2022", "Sonntag 09.10.2022", "Sonntag 09.10.2022", "Sonntag 09.10.2022"],
  ["Freitag 14.10.2022", "Samstag 15.10.2022", "Samstag 15.10.2022", "Samstag 15.10.2022", "Samstag 15.10.2022", "Samstag 15.10.2022", "Sonntag 16.10.2022", "Sonntag 16.10.2022", "Sonntag 16.10.2022"],
  ["Freitag 21.10.2022", "Samstag 22.10.2022", "Samstag 22.10.2022", "Samstag 22.10.2022", "Samstag 22.10.2022", "Samstag 22.10.2022", "Sonntag 23.10.2022", "Sonntag 23.10.2022", "Sonntag 23.10.2022"],
  ["Freitag 28.10.2022", "Samstag 29.10.2022", "Samstag 29.10.2022", "Samstag 29.10.2022", "Samstag 29.10.2022", "Samstag 29.10.2022", "Sonntag 30.10.2022", "Sonntag 30.10.2022", "Sonntag 30.10.2022"],
  ["Freitag 04.11.2022", "Samstag 05.11.2022", "Samstag 05.11.2022", "Samstag 05.11.2022", "Samstag 05.11.2022", "Samstag 05.11.2022", "Samstag 05.11.2022", "Sonntag 06.11.2022", "Sonntag 06.11.2022"],
  ["Dienstag 08.11.2022", "Dienstag 08.11.2022", "Dienstag 08.11.2022", "Dienstag 08.11.2022", "Mittwoch 09.11.2022", "Mittwoch 09.11.2022", "Mittwoch 09.11.2022", "Mittwoch 09.11.2022", "Mittwoch 09.11.2022"],
  ["Freitag 11.11.2022", "Samstag 12.11.2022", "Samstag 12.11.2022", "Samstag 12.11.2022", "Samstag 12.11.2022", "Samstag 12.11.2022", "Samstag 12.11.2022", "Sonntag 13.11.2022", "Sonntag 13.11.2022"],
  ["Freitag 20.01.2023", "Samstag 21.01.2023", "Samstag 21.01.2023", "Samstag 21.01.2023", "Samstag 21.01.2023", "Samstag 21.01.2023", "Samstag 21.01.2023", "Sonntag 22.01.2023", "Sonntag 22.01.2023"],
  ["Dienstag 24.01.2023", "Dienstag 24.01.2023", "Dienstag 24.01.2023", "Dienstag 24.01.2023", "Mittwoch 25.01.2023", "Mittwoch 25.01.2023", "Mittwoch 25.01.2023", "Mittwoch 25.01.2023", "Mittwoch 25.01.2023"],
  ["Freitag 27.01.2023", "Samstag 28.01.2023", "Samstag 28.01.2023", "Samstag 28.01.2023", "Samstag 28.01.2023", "Samstag 28.01.2023", "Samstag 28.01.2023", "Sonntag 29.01.2023", "Sonntag 29.01.2023"],
  ["Freitag 03.02.2023", "Samstag 04.02.2023", "Samstag 04.02.2023", "Samstag 04.02.2023", "Samstag 04.02.2023", "Samstag 04.02.2023", "Samstag 04.02.2023", "Sonntag 05.02.2023", "Sonntag 05.02.2023"],
  ["Freitag 10.02.2023", "Samstag 11.02.2023", "Samstag 11.02.2023", "Samstag 11.02.2023", "Samstag 11.02.2023", "Samstag 11.02.2023", "Samstag 11.02.2023", "Sonntag 12.02.2023", "Sonntag 12.02.2023"],
  ["Freitag 17.02.2023", "Samstag 18.02.2023", "Samstag 18.02.2023", "Samstag 18.02.2023", "Samstag 18.02.2023", "Samstag 18.02.2023", "Sonntag 19.02.2023", "Sonntag 19.02.2023", "Sonntag 19.02.2023"]
]

  const [ tipps, setTipps] = useState({
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
    ]
 })
 //variables end

 //functions start
 if (document.readyState === "complete"){
  var set = false
  time[props.day-1].forEach((game) => {
    if (Date.now() < game && !set){
      setTimeout(function() { window.location.reload(false); }, game - Date.now());
      set = true
    }
  })
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
    setTipps(newTipps)
  }
 }

 const insertDefaultData = () => {
    var dict = {}
    const d = new Date();
    dict["number"] = props.day
    dict["date"] = d.getDate().toString()+"."+(d.getMonth()+1).toString()+"."+d.getFullYear().toString()
    dict["user"] = user.username
    dict["userId"] = user.username
    dict["games"] = []
    spiele[props.day-1].map((game, i) => {
      var newGame = {}
      newGame["heimName"] = game[0];
      newGame["heimTore"] = 0;
      newGame["auswName"] = game[1];
      newGame["auswTore"] = 0;
      newGame["date"] = dates[props.day-1][i];
      newGame["type"] = 0;
      dict["games"].push(newGame);
    });
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
 };

 const handleClick = async (e) => {
  e.preventDefault()
  try {
      const res = await axiosInstance.put("/tipps/update/"+user.username+"/"+props.day, tipps)
      window.location.reload(false);
  } catch (err) {
  }
};

  const checkTime = (i) => {
    if (Date.now() > time[props.day-1][i]) {
      return true;
    }else{
      return false;
    }
  }

  const handleNewTipps = async() => {
    if(!createTipps){
      const newData = insertDefaultData()
      try {
          const res = await axiosInstance.post("/tipps/create", newData)
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
  if(!props.click){
    return (
      <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Spieltag1 props>
          {data.length > 0 ?
              (data[0].games.map((tipp, i) => (
                <>
                  <Gamecontainer key={i}>
                    <Gamedate>
                      <p>{dates[props.day-1][i]}</p>
                    </Gamedate>
                    <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
                    <Game>
                      <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                      <Result>
                        <Inputresult readOnly={true} id={i} defaultValue={tipp.heimTore} style={{backgroundColor: props.typ?calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 1)? 'orange':'red')):calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}}></Inputresult>
                        <Inputresult readOnly={true} id={i+100} defaultValue={tipp.auswTore} style={{backgroundColor: props.typ?calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 1)? 'orange':'red')):calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}}></Inputresult>
                      </Result>
                      <Team2><p id={tipp.auswName}>{tipp.auswName}</p></Team2>
                    </Game>
                    <h3 style={{margin: "15px 0px"}}>Tipp der KI:</h3>
                    <Game>
                      <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                      <Result>
                        <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i} defaultValue={ki[props.day-1][i][0]} onChange={handleChange}></Inputresult>
                        <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i+100} defaultValue={ki[props.day-1][i][1]} onChange={handleChange}></Inputresult>
                      </Result>
                      <Team2><p id={tipp.auswName}>{tipp.auswName}</p></Team2>
                    </Game>
                    <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                    <Game>
                      <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                      <Result>
                        <Inputresult readOnly={true} defaultValue={results[props.day-1][i][0]}></Inputresult>
                        <Inputresult readOnly={true} defaultValue={results[props.day-1][i][1]}></Inputresult>
                      </Result>
                      <Team2><p id={tipp.auswName}>{tipp.auswName}</p></Team2>
                    </Game>
                    {props.typ? 
                    <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), ki[props.day - 1][i][0], ki[props.day - 1][i][1])}</h3>
                    :
                    <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.day - 1][i][0], results[props.day - 1][i][1])}</h3>
                    }
                  </Gamecontainer>
                  {error && <span>{error.message}</span>}
                  {data.length && makeTrue()}
                </>
              )))
              :
              spiele[props.day-1].map((spiel, i) => (
                <Gamecontainer key={i}>
                  <Gamedate>
                    <p>{dates[props.day-1][i]}</p>
                  </Gamedate>
                  <h3 style={{margin: "15px 0px"}}>Tipp der KI:</h3>
                  <Game>
                    <Team1><p>{spiel[0]}</p></Team1>
                    <Result>
                      <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i} defaultValue={ki[props.day-1][i][0]} onChange={handleChange}></Inputresult>
                      <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i+100} defaultValue={ki[props.day-1][i][1]} onChange={handleChange}></Inputresult>
                    </Result>
                    <Team2><p>{spiel[0]}</p></Team2>
                  </Game>
                  <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
                  <Game>
                    <Team1><p>{spiel[0]}</p></Team1>
                    <Result>
                      <Inputresult readOnly={true} defaultValue={results[props.day-1][i][0]}></Inputresult>
                      <Inputresult readOnly={true} defaultValue={results[props.day-1][i][1]}></Inputresult>
                    </Result>
                    <Team2><p>{spiel[1]}</p></Team2>
                  </Game>
                  <h3 style={{ margin: "15px 0px" }}>Du hast nicht mitgetippt!</h3>
                </Gamecontainer>
              ))
            }
            <SpieltagTabelle day={props.day} res={results} typ={props.typ} ki={ki[props.day-1]}/>
            
            
            </Spieltag1>
            
      )
      
      }
      </>
    )
  }else{
    return(
      <Spieltag1 props>
        {!data.length ?
        (<>
          <h3 style={{padding: "15px"}}>Willst du mitmachen?</h3>
          <Yesbutton onClick={handleNewTipps}>Ja!</Yesbutton>
        </>)
        :
        data[0].games.map((tipp, i) => (
          (<>
            <Gamecontainer key={i}>
              <Gamedate>
                <p>{dates[props.day-1][i]}</p>
              </Gamedate>
              <h3 style={{marginBottom: "15px"}}>Dein Tipp:</h3>
              {results[props.day-1][i].length > 0 ?
              <Game>
                <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                <Result>
                  {ki.length == props.day ?
                  <>
                    <Inputresult readOnly={checkTime(i)} id={i} defaultValue={tipp.heimTore} onChange={handleChange} style={{backgroundColor: props.typ?calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 1)? 'orange':'red')):calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}}></Inputresult>
                    <Inputresult readOnly={checkTime(i)} id={i+100} defaultValue={tipp.auswTore} onChange={handleChange} style={{backgroundColor: props.typ?calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, tipp.auswTore, ki[props.day-1][i][0], ki[props.day-1][i][1]) === 1)? 'orange':'red')):calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(tipp.heimTore, tipp.auswTore, results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(tipp.heimTore, parseInt(tipp.auswTore), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}}></Inputresult>
                  </>
                  :
                  <>
                    <Inputresult readOnly={checkTime(i)} id={i} defaultValue={tipp.heimTore} onChange={handleChange}></Inputresult>
                    <Inputresult readOnly={checkTime(i)} id={i+100} defaultValue={tipp.auswTore} onChange={handleChange}></Inputresult>
                  </>
                  }
                  </Result>
                <Team2><p id={tipp.auswName}>{tipp.auswName}</p></Team2>
              </Game>
              :
              <Game>
                <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                <Result>
                  <Inputresult id={i} defaultValue={tipp.heimTore} onChange={handleChange}></Inputresult>
                  <Inputresult id={i+100} defaultValue={tipp.auswTore} onChange={handleChange}></Inputresult>
                </Result>
                <Team2><p id={tipp.auswName}>{tipp.auswName}</p></Team2>
              </Game>
              }
              <h3 style={{margin: "15px 0px"}}>Tipp der KI:</h3>
              <Game>
                <Team1><p>{tipp.heimName}</p></Team1>
                <Result>
                  <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i} defaultValue={ki[props.day-1][i][0]} onChange={handleChange}></Inputresult>
                  <Inputresult readOnly={true} style={{backgroundColor: calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 4? 'green': ((calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 2 || (calculateScore(parseInt(ki[props.day-1][i][0]), parseInt(ki[props.day-1][i][1]), results[props.day-1][i][0], results[props.day-1][i][1]) === 1)? 'orange':'red'))}} id={i+100} defaultValue={ki[props.day-1][i][1]} onChange={handleChange}></Inputresult>
                </Result>
                <Team2><p>{tipp.auswName}</p></Team2>
              </Game>
              {results[props.day-1][i].length > 0 ? 
              <>
              <h3 style={{margin: "15px 0px"}}>Das Ergebnis:</h3>
              <Game>
                <Team1><p id={tipp.heimName}>{tipp.heimName}</p></Team1>
                <Result>
                  <Inputresult readOnly={true} defaultValue={results[props.day - 1][i][0]}></Inputresult>
                  <Inputresult readOnly={true} defaultValue={results[props.day - 1][i][1]}></Inputresult>
                </Result>
                <Team2>
                  <p id={tipp.auswName}>{tipp.auswName}</p>
                </Team2>
              </Game>
              {props.typ? 
              <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), ki[props.day - 1][i][0], ki[props.day - 1][i][1])}</h3>
              :
              <h3 style={{ margin: "15px 0px" }}>Punkte: {calculateScore(parseInt(tipp.heimTore), parseInt(tipp.auswTore), results[props.day - 1][i][0], results[props.day - 1][i][1])}</h3>
              }
              </>
              :
              <></>
              }
            </Gamecontainer>
            {data.length && makeTrue()}
          </>)
        ))
      }
      {<Bodybuttonwh onClick={handleClick}>Speichern</Bodybuttonwh>}

      </Spieltag1>
      
    )
  }
  
}
