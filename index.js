const app = "I don't do much.";

let digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(() => this.time++, 1000);
  }
};

function censor(word, string) {
  let re = new RegExp(word, "g")
  return string.replace(re, 'BLEEP')
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
