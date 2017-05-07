const app = "I don't do much.";

const digitalClock = {
  time: Math.round(new Date().getTime() / 1000),
  startTicking: function () {
    setInterval(() => this.time++, 1000)
  }
}

const censor = (word, string) => {
  let matcher = new RegExp(word, "gi")
  return string.replace(matcher, "BLEEP")
}

const violenceCensor = censor.bind(null, "violence");
const drugsCensor = censor.bind(null, "drugs");
