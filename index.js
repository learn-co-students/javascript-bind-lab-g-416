const digitalClock = {
	time: Math.round(Date.now() / 1000),
	startTicking: function(){ setInterval(() => this.time++, 1000);}
}

const censor = (targetWord, inputString) => inputString.replace(RegExp(targetWord,"gi"), 'BLEEP');

const violenceCensor = (inputString) => censor('violence', inputString);

const drugsCensor = (inputString) => censor('drugs', inputString);
