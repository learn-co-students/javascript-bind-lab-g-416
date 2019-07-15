let digitalClock = {
  time: Math.round(Date.now()/1000),
  startTicking() {
    setInterval(() => {
      this.time++
    }, 1000);
  }
}

let censor = (word, string) => {
  var regex = new RegExp(word, 'gi');
  return string.replace(regex, 'BLEEP');
};

let violenceCensor = censor.bind(null, 'violence')
let drugsCensor = censor.bind(null, 'drugs')
