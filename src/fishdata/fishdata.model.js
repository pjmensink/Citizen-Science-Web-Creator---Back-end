const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, required: true },
    location: { type: String, required: false },
    catch_size: { type: String, required: false },
    date: { type: String, default: Date.now },
    conditions: { type: String, required: false },
    imageURL: { type: String, required: false  },
    latitude: { type: String, required: false  },
    longitude: { type: String, required: false  },
    species: { type: String, required: false  },
    common: { type: String, required: false  }
});

module.exports = mongoose.model('Fishdata', schema, 'fishdata');
