const mongoose = require(`mongoose`)
const governateSchema = new  mongoose.Schema({
    ctryName:{
        type:String
    },
    name:{
        type:String
    },
    arCtryName:{
        type:String
    },
    arName:{
        type:String
    },
    isDeleted:{type: Boolean, default: false},
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Governate', governateSchema);