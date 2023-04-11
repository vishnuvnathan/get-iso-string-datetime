function getDateTimeFromISOString(isoString) {
	return isoString.toString().replace(/T/, ' ').slice(0, -1);
}

module.exports = getDateTimeFromISOString;
