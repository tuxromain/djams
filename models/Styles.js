const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StylesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    decade: {
        type: Number
    }
})

module.exports = Styles = mongoose.model('Styles', StylesSchema);