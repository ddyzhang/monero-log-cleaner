var ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
var address = /4[0-9a-zA-Z]{94}/g;
var transId = /[0-9a-fA-F]{64}/g;

function cleanLog() {
	var log = document.getElementsByName('input')[0].value;
	log = log.replace(ip, "X.X.X.X");
	log = log.replace(address, "4AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
	log = log.replace(transId, "0000000000000000000000000000000000000000000000000000000000000000");
	document.getElementsByName('output')[0].value = log;
}
