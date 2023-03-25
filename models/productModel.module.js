const mongoose = require(`mongoose`)
const ElecmodelSchema = new  mongoose.Schema({
   model:{type:[mongoose.Schema.Types.Mixed]},
   isDeleted:{type: Boolean, default: false},
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Model', ElecmodelSchema);