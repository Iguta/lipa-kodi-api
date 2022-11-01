const router = require("express").Router();
const House = require("../models/House");

//adding house
router.post("/", async(req, res) => {
    const newHouse = new House(req.body);
    try{
        const savedHouse = await newHouse.save();
        res.status(200).json(savedHouse);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//getting Houses
router.get("/", async(req, res) => {
    try{
        const houses = await House.find();
        res.status(200).json(houses)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;