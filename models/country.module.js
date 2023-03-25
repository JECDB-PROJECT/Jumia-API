const mongoose = require(`mongoose`)
const countrySchema = new  mongoose.Schema({
    name:{
        type:String,
        unique:true
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

module.exports = mongoose.model('Country', countrySchema);
