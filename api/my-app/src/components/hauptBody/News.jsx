import React from 'react'
import { NewsContainer, NewsContainer2, NewsContent } from "./Body.styled"
export const News = () => {
  return (
    <NewsContainer id="news">
        <NewsContainer2>
            <NewsContent>
                <h1>Updates der Seite</h1>
                <p>Hey Leute, die Seite wird regelmäßig geupdated (Wenn ich mal eine freie Minute habe). Hier werde ich euch immer darüber informieren, was geupdated wurde.
                    Die letzten 2 Wochen habe ich ein paar Bugs entfernt und an der Performance gearbeitet. Der nächste Schritt besteht darin eine mobile Version zur
                    Verfügung zu stellen, dann könnt ihr die Seite auch ganz einfach vom Handy aus bedienen! Ich werde auch demnächst ein Tool zur Verfügung stellen,
                    mit dem ihr Buggs, etc. reporten könnt. <br></br>
                    Danach werde ich noch eine Tabelle für die Ergebnisse der KI erstellen und danach eine Tabelle, die die aktuelle Punktzahl aller Nutzer des Tabellen-Tippspiels 
                    anzeigt (Falls ihr euch daran noch erinnern könnt ;)
                </p>
                <h1 style={{marginTop:"10px"}}>WM Tippspiel</h1>
                <p>Zur WM wird es auch ein Tippspiel geben, aber ohne KI :D Dazu wird es auch ein Video auf meinem Fußball Kanal geben, stay tuned :)</p>
            </NewsContent>
        </NewsContainer2>
    </NewsContainer>
  )
}
