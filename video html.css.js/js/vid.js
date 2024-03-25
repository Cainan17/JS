const video=document.querySelector("#vid")

const bot1=document.querySelector('#play')
const bot2=document.querySelector("#pause")
const bot3=document.querySelector("#acelerar")
const bot4=document.querySelector("#retornar")
const bot5=document.querySelector("#stop")
const bot6=document.querySelector("#av10")
const bot7=document.querySelector("#vol10")


bot1.addEventListener('click', iniciar)
bot2.addEventListener('click', parar)
bot3.addEventListener('click', adiantar)
bot4.addEventListener('click', retroceder)
bot5.addEventListener('click',volte)
bot6.addEventListener('click',a10s )
bot7.addEventListener('click',v10s )



function iniciar(){
video.play()
video.playbackRate = 1
}

function parar(){
video.pause()
}

function adiantar(){
video.playbackRate +=1.5
if(video.playbackRate>=6)
{
video.playbackRate=1
}
}

function retroceder(){
video.playbackRate -=0.5
if(video.playbackRate<=6)
{
video.playbackRate=1
}
}

function volte(){
video.pause()
video.currentTime=0
}
function a10s(){
video.currentTime +=10
}

function v10s(){
video.currentTime -=10
}
