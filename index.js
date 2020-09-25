let digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(() => this.time++, 1000);
  },
};

const censor = (word, stringSample) => {
  let regex = new RegExp(word, "gi");
  return stringSample.replace(regex, "BLEEP");
};

const violenceCensor = (stringSample) => censor("violence", stringSample);
const drugsCensor = (stringSample) => censor("drugs", stringSample);
