let digitalClock={time:(Math.round(Date.now() / 1000)), startTicking: function(t){
    setInterval(this.time+1,1000).bind()
}};

