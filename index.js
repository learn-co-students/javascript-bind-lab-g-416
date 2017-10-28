const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function () {
      setInterval(() => this.time++, 1000)
      }
};

const censor = function(word, string) {
  const censorRegExp = new RegExp(word, 'gi');
  return string.replace(censorRegExp, 'BLEEP');
};

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
