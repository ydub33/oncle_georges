const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

const txts=document.getElementById('txts')
const txt = document.querySelectorAll('#txts txtimg')


let idx = 0

// var interval and function run servent 
// à defiler les images automatiquement
// on peut mettre les deux en comm 
// ou mettre un plus gros interval 
// genre 10000 ms 20s or more


let interval = setInterval(run,20000)

function run() {
    idx++
    changeImage()
   
}

function changeImage() {
    if(idx > img.length - 1 ) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    if(window.matchMedia("(min-width:420px)").matches) {
        imgs.style.transform = `translateX(${-idx * 500}px)`
      } else {
        imgs.style.transform = `translateX(${-idx * 375}px)`
      }
    
    
}


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 20000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()  
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})