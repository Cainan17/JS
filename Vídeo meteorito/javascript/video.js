const vid = document.querySelector('#video');
const bot = document.querySelector('#botao');





function funcao(){

if(vid.paused){
vid.play();
bot.innerHTML = '<i class="fa fa-pause" aria-hiddenc="true"></i>Pause';
}
else{
vid.pause();
bot.innerHTML = '<i class="fa fa-play" aria-hiddenc="true"></i> Play';
}
}


