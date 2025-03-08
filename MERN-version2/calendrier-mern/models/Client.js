const mongoose = require('mongoose');

//definition du modèle client

const clientSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone : {
		type: String
	},
	address: {
		type: String
	}
}, {timestamps: true});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;