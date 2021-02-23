let digitalClock={time:(Math.round(Date.now() / 1000)), startTicking: function(t){
    setInterval(this.time+1,1000).bind(this)
}};

 let censor=((word,string)=>{return string.split(word).join("BLEEP")})

function violenceCensor(string){
   return censor("violence",string)
}


function drugsCensor(string){
   return censor("drugs",string)
}

