var digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function(){
    setInterval(() => this.time++, 1000);
  }
};

function censor(word, str){
  let match = new RegExp(word, 'gi');
  return str.replace(match, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
