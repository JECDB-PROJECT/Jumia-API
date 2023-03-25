const mongoose = require(`mongoose`)
const citySchema = new  mongoose.Schema({
    governateName:{
        type:String
    },
    name:{
        type:String,
    },
    arGovernateName:{
        type:String
    },
    arName:{
        type:String,
    },
    isDeleted:{type: Boolean, default: false},
},
{
    timestamps: true
}
);

module.exports = mongoose.model('City', citySchema);
