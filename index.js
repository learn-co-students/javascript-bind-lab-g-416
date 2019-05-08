const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(() => {
      this.time++;
    }, 1000);
  },
};

const censor = (word, string) => {
  var regex = new RegExp(word, 'g');
  return string.replace(regex, 'BLEEP');
}; 

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');