const mongoose = require("mongoose");

const TenantSchema = mongoose.Schema({
    plotNumber:{type:String, required:true},
    houseNumber:{type:String, required:true},
    rate:{type:String, required:true},
    type:{type:String, required:true},
    location:{type:String, required:true}
});

module.exports = mongoose.model("House", TenantSchema);