import mongoose from "mongoose";

const animeModel = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
    },
    episodes : {
        type : Number,
        required : true,
    },
})

const Anime = mongoose.model('Anime', animeModel)

export default Anime