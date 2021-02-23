let digitalClock={time:(Math.round(Date.now() / 1000)), startTicking: function(t){
    setInterval(this.time+1,1000).bind(this)
}};

 function censor(word,string){
     return string.split(word).join("BLEEP")
    }

    const violenceCensor = censor.bind(null, 'violence');
    const drugsCensor = censor.bind(null, 'drugs');
}


