const app = "I don't do much.";

const digitalClock = {
  time: Math.round(new Date().getTime()/1000),
  startTicking: function() { 
    setInterval(() => this.time++, 1000) 
  }
}

function censor(censoredWord, sentence){
 if (sentence.includes(censoredWord)){
  censoredWord = new RegExp(censoredWord, 'gi');
  return sentence.replace(censoredWord, 'BLEEP');
 }
}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');