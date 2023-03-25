
const mongoose = require(`mongoose`)
const categorySchema = new mongoose.Schema({
    image: {
        type: [String]
    },
    name: {
        type: String
    },
    arName: {
        type: String,
    },
    subCategories: [{
        name: { type: String },
        arName: { type: String },
        image: { type: [String] }
    }],
    isDeleted: { type: Boolean, default: false },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Category', categorySchema);