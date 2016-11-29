const app = "I don't do much.";

const digitalClock = {

  time: Math.round(new Date().getTime() / 1000),
  startTicking: function(){
    setInterval(function(){this.time++;}.bind(this), 1000);
  }

};

var censor = function(wordToCensor, string){
  return string.replace(RegExp(wordToCensor, 'g'), "BLEEP");
};

var violenceCensor = censor.bind(null, 'violence');

var drugsCensor = censor.bind(null, 'drugs');
