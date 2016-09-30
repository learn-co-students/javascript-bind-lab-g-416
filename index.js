const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function () {
    setInterval(() => this.time++, 1000);
  }
};

const censor = (censoredWord, sentence) => {
  const regex = new RegExp(censoredWord, 'gi')
  return sentence.replace(regex, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');
