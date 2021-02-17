let digitalClock={time:(Math.round(Date.now() / 1000)), startTicking: function(t){
    setInterval(this.time+1,1000).bind()
}};

function censor(word,string){
string.replace(word,"BLEEP")
}

function violenceCensor(string){
    censor("violence",string).bind()
}

function drugsCensor(string){
    censor("drugs",string).bind()
}

