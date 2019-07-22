const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(() => { this.time++ }, 1000 )
  }
}

const censor = (cens, string) => {
  // cens will be the value of the word that needs to be censored
   var regex = new RegExp(cens, 'gi');
  return string.replace(regex, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence')

const drugsCensor = censor.bind(null, 'drugs')