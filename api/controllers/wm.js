import SpieleWM from "../models/WM.js"
import StatsWM from "../models/WMStats.js"

export const createTipp = async (req, res, next) => {
    const newTipps = new SpieleWM(req.body)
    try{
        const savedTipps = await newTipps.save()
        res.status(200).json(savedTipps)
    }catch(err){
        next(err)
    }
}

export const createStats = async (req, res, next) => {
    const newTipps = new StatsWM(req.body)
    try{
        const savedStats = await newTipps.save()
        res.status(200).json(savedStats)
    }catch(err){
        next(err)
    }
}

export const updateTipps = async (req, res, next) =>{
    try{
        const updatedTipps = await SpieleWM.findOneAndUpdate(
            {user: req.params.user, group: req.params.group}, 
            { $set: req.body }, 
            {new:true}
        )
        res.status(200).json(updatedTipps)
    }catch(err){
        next(err)
    }
}
export const updateStats = async (req, res, next) =>{
    try{
        const updatedStats = await StatsWM.findOneAndUpdate(
            {user: req.params.user, group: req.params.group}, 
            { $set: req.body }, 
            {new:true}
        )
        res.status(200).json(updatedStats)
    }catch(err){
        next(err)
    }
}

export const getTipps = async (req, res, next) =>{
    try{
        const tipps = await SpieleWM.find({user: req.params.user, group: req.params.group})
        res.status(200).json(tipps)
    }catch(err){
        next(err)
    }
}
export const getStats = async (req, res, next) =>{
    try{
        const tipps = await StatsWM.find({user: req.params.user})
        res.status(200).json(tipps)
    }catch(err){
        next(err)
    }
}


export const getAllTipps = async (req, res, next) =>{
    try{
        const SpieleGroup = await SpieleWM.find({group: req.params.day})
        res.status(200).json(SpieleGroup)
        console.log(SpieleGroup)
    }catch(err){
        next(err)
    }
}
export const getAllStats = async (req, res, next) =>{
    try{
        const SpieleGroup = await StatsWM.find({group: req.params.group})
        res.status(200).json(SpieleGroup)
        console.log(SpieleGroup)
    }catch(err){
        next(err)
    }
}
