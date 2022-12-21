// select elements
const Q = document.getElementById('q-btn');
const W = document.getElementById('w-btn');
const E = document.getElementById('e-btn');
const A = document.getElementById('a-btn');
const S = document.getElementById('s-btn');
const D = document.getElementById('d-btn');
const Z = document.getElementById('z-btn');
const X = document.getElementById('x-btn');
const C = document.getElementById('c-btn');
const display = document.getElementById('display');

// set keys to elements
addEventListener('keydown', (event) => {
    playSound(event.key.toUpperCase());
});

// play sounds
function playSound(s) {
    const audio = document.getElementById(s);
    
    // display sounds title
    let d = audio.src.split('/');
    display.innerText = d[d.length-1];
    
    // play sound
    audio.play();
}
