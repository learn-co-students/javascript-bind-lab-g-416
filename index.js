const digitalClock = {
    time: Math.round(Date.now() / 1000),
    startTicking: function () {
      setInterval(() => this.time++, 1000);
    }
  };
  

 function censor(word,string){
     return string.split(word).join("BLEEP")
    }

    const violenceCensor = censor.bind(null, 'violence');
    const drugsCensor = censor.bind(null, 'drugs');



