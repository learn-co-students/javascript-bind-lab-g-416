var digitalClock = {
	time: Math.round(Date.now() / 1000),
	startTicking: function() { setInterval(() => this.time++, 1000) }
}

function censor (word, rawString){
	var word = new RegExp(word, 'g');
	return rawString.replace(word, "BLEEP");
}

const violenceCensor = censor.bind(null, "violence");
const drugsCensor = censor.bind(null, "drugs");
