import StatsWM from "../models/WMStats.js"

export const createStats = async (req, res, next) => {
    const newTipps = new StatsWM(req.body)
    try{
        const savedStats = await newTipps.save()
        res.status(200).json(savedStats)
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

export const getStats = async (req, res, next) =>{
    try{
        const tipps = await StatsWM.find({user: req.params.user})
        res.status(200).json(tipps)
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
