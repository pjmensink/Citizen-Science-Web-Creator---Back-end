const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('../_helpers/db');
const Fishdata = db.FishData;

module.exports = {
    submit,
    getAll,
    getAllItems
};

async function submit(data) {
    const uploadData = new Fishdata(data);

    await uploadData.save();
}

async function getAll(data) {
	return await Fishdata.find({userId:String(data.userId)});
}

async function getAllItems(data) {
	return await Fishdata.find({});
}

/*async function getByDate(data) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	
	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm > 1) {
		mm -= 1;
	}else {
		mm = 12;
		yyyy -= 1;
	}

	if(mm<10) {
		mm = '0'+mm;
	}	 
	
	prevMonth = yyyy + '-' + mm + '-' + dd;
	return await Fishdata.find({userId:String(data.userId), date: {$gt: prevMonth}}).limit(30);
}*/

