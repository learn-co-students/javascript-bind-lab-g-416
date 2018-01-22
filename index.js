const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function () {setInterval(() => this.time++, 1000)}
}


function censor(word, string) {
  var word = new RegExp(word, 'g'); //'g' for global regexp finding
  return string.replace(word, 'BLEEP')
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
