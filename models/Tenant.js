const mongoose = require("mongoose");

const TenantSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    phoneNumber:{type:Number, required:true, unique:true},
    nationalID:{type:Number, required:true,  unique:true},
    houseNumber:{type:String, required:true}
});

module.exports = mongoose.model("Tenant", TenantSchema);