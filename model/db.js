const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect(process.env.mongourl);

const prodSchema=mongoose.Schema({
    name: String,
    description : String,
    category : String,
    image : String,
    location : String,
    postedAt : String,
    price : String
});

const ProdModel=mongoose.model("Classifieds",prodSchema);

module.exports={
    connection,ProdModel
}