const app = "I don't do much.";

const digitalClock = {
  time: Math.round(new Date().getTime() / 1000),
  startTicking() {
    setInterval( () => this.time += 1, 1000);
  }
};


function censor (word, string) {
  if (string.includes(word)) {
    word = new RegExp(word, 'g');
    return string.replace(word, "BLEEP");
  }
};

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');


// function censor (word, string) {
//   if (word === "violence" && string.includes(word)) {
//     violenceCensor(string);
//   }
//   else if (word === "drugs" && string.includes(word)) {
//     drugsCensor(string);
//   }
// };
//
// const violenceCensor = (string) => {
//   return string.replace(/violence/g, "BLEEP");
// };
//
// const drugsCensor = (string) => {
//   return string.replace(/drugs/g, "BLEEP");
// };
