const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstrumentsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Instruments = mongoose.model('Instruments', InstrumentsSchema);