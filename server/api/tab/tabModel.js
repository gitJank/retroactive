var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TabSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('tab', TabSchema);