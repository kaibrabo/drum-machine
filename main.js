console.log('fired');

const Q = document.getElementById('q-btn');
const W = document.getElementById('w-btn');
const E = document.getElementById('e-btn');
const A = document.getElementById('a-btn');
const S = document.getElementById('s-btn');
const D = document.getElementById('d-btn');
const Z = document.getElementById('z-btn');
const X = document.getElementById('x-btn');
const C = document.getElementById('c-btn');

function playSound(s) {
    const audio = document.getElementById(s);
    audio.play();
}
