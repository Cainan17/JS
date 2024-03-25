const mario = document.querySelector('.mario');
const pipe = document.querySelector('.cano');
const body = document.querySelector('.game-mario')
const nuvem = document.querySelector('.clouds')

const jump = () => {
   
    mario.classList.add('jump');
  
    setTimeout(() => {
   mario.classList.remove('jump');
  }, 500);

}

const loop = setInterval(() =>{
    

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
  


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
     
     pipe.style.animation = 'none'
     pipe.style.left = `${pipePosition}px`

     mario.style.animation = 'none'
     mario.style.left = `${marioPosition}px`

    mario.src ='images/game-over.png';
    mario.style.width ='75px';
    mario.style.marginLeft = '50px';

    body.style.background = ' linear-gradient(black, red, orange )';
    
    nuvem.src = 'images/nuvemtrovao.png';
    nuvem.style.width = '300px';
    

    clearInterval('loop');
    }


}, 10);



document.addEventListener('keyup', jump);