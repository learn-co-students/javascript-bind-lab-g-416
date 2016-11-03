const digitalClock = {
  time: Math.round(new Date().getTime()/1000),
  startTicking: function() {
    setInterval(() => this.time ++, 1000)

  }
}


var censor = function(word,string) {
  return string.split(word).join('BLEEP')


}

const violenceCensor = censor.bind(null, 'violence')

const drugsCensor = censor.bind(null, 'drugs')
