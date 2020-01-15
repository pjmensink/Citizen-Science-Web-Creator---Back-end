const config = require('config.json');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
const mongoURL = 'mongodb+srv://admin123:admin123@cluster0-enx8v.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(config.connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    FishData: require('../fishdata/fishdata.model')
};
