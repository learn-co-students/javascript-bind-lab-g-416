const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function () {
    setInterval(() => this.time++, 1000);
  }
};

function censor(censoredWord, input) {
  const matcher = new RegExp(censoredWord, 'gi');
  return input.replace(matcher, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
