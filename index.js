let digitalClock = {
  time: new Date() / 1000 | 0,
  startTicking: function() {setInterval(() => this.time++, 1000)}
}
const censor = (word, sentence) => sentence.replace(new RegExp(word, 'gi'), "BLEEP"); // REGEX
//const censor = (word, sentence) => sentence.split(word).join("BLEEP"); (SPLIT+ JOIN)
const violenceCensor = censor.bind(null, "violence");
const drugsCensor = censor.bind(null, "drugs");
