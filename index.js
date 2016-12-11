// const app = "I don't do much.";

const digitalClock = {

  time: Math.round(Date.now() / 1000),
  startTicking(){
  setInterval(() => this.time++, 1000);
  }
}

function censor(censoredWord, sentence){
  const matcher = new RegExp(censoredWord, 'gi');
  return sentence.replace(matcher, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
