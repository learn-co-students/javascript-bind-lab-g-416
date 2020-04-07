const digitalClock = {
	time: Math.round(Date.now() / 1000),
	startTicking() {setInterval(() => this.time++, 1000)}
}

const censor = (word, string) => {
	const re = new RegExp(word, "gi")

	return string.replace(re, "BLEEP")
}

const violenceCensor = censor.bind(null, "violence")

const drugsCensor = censor.bind(null, "drugs")
