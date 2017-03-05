const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    var digitalClock = this;
    setInterval(function(){
          digitalClock.time++;
    }, 1000);

  }
}

const censor = (word, str) => { return str.split(word).join('BLEEP')}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');
