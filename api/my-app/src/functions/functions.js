// @ts-nocheck
export function calculateScore(tippH, tippA, ergH, ergA){
    tippH = parseInt(tippH)
    tippA = parseInt(tippA)
    ergH = parseInt(ergH)
    ergA = parseInt(ergA)
    //4 points
    if(tippH === ergH && tippA === ergA) return 4
    //heim gewinnt
    else if(ergH > ergA){
      //0 Punkte
      if(tippH < tippA) return 0
      //2 Punkte
      else if((tippH - tippA) === (ergH - ergA)) return 2
      else if (tippH > tippA) return 1
      else return 0
    }
    //ausw gewinnt
    else if(ergH < ergA){
      //0 Punkte
      if(tippH > tippA) return 0
      //2 Punkte
      else if((tippH - tippA) === (ergH - ergA)) return 2
      else if (tippH < tippA) return 1
      else return 0
    }
    //unendschieden
    else if(ergH === ergA){
      //1 Punkt
      if((tippH - tippA) === (ergH - ergA)) return 1
      else return 0
    }
    else return 0
   }

   export function SumScore(tippH, tippA, ergH, ergA, score){
    var val = score
    //4 points
    if(tippH === ergH && tippA === ergA) return val+= 4
    //heim gewinnt
    else if(ergH > ergA){
      //0 Punkte
      if(tippH < tippA) return val
      //2 Punkte
      else if((tippH - tippA) === (ergH - ergA)) return val+= 2
      else if (tippH > tippA) return val+= 1
      else return val
    }
    //ausw gewinnt
    else if(ergH < ergA){
      //0 Punkte
      if(tippH > tippA) return val
      //2 Punkte
      else if((tippH - tippA) === (ergH - ergA)) return val+= 2
      else if (tippH < tippA) return val+= 1
      else return val
    }
    //unendschieden
    else if(ergH === ergA){
      //1 Punkt
      if((tippH - tippA) === (ergH - ergA)) return val+= 1
      else return val
    }
    else return val
   }
   