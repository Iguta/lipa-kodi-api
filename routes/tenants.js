const router = require("express").Router();
const Tenant = require("../models/Tenant");

//adding tenant
router.post("/", async(req, res) => {
    const newTenant = new Tenant(req.body);
    try{
        const savedTenant = await newTenant.save();
        res.status(200).json(savedTenant);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//getting tenant
router.get("/:id", async(req, res) => {
    try{
        const tenant = await Tenant.findOne({nationalID:req.params.id});
        res.status(200).json(tenant)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;