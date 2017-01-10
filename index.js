const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(this.time++, 1000);
  }
};

const censor = function (word, string) {
  const foo = new RegExp(word, 'g');
  const newString = string.replace(foo, 'BLEEP');
  return newString;
};

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = (string) => { return censor('drugs', string) };
