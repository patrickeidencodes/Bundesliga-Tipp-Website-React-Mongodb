import Spieltag from "../models/Tipps.js"

export const createTipp = async (req, res, next) => {
    const newTipps = new Spieltag(req.body)
    try{
        const savedTipps = await newTipps.save()
        res.status(200).json(savedTipps)
    }catch(err){
        next(err)
    }
}

export const updateTipps = async (req, res, next) =>{
    try{
        const updatedTipps = await Spieltag.findOneAndUpdate(
            {user: req.params.user, number: req.params.day}, 
            { $set: req.body }, 
            {new:true}
        )
        res.status(200).json(updatedTipps)
    }catch(err){
        next(err)
    }
}

export const getTipps = async (req, res, next) =>{
    console.log("hi")
    try{
        const tipps = await Spieltag.find({user: req.params.user, number: req.params.day})
        res.status(200).json(tipps)
    }catch(err){
        next(err)
    }
}


export const getAllTipps = async (req, res, next) =>{
    try{
        const spieltage = await Spieltag.find({number: req.params.day})
        res.status(200).json(spieltage)
    }catch(err){
        next(err)
    }
}
