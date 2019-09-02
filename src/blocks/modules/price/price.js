import $ from 'jquery'; 
window.jQuery = $; 

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
document.getElementById('count-generated').innerHTML = getRandom(50, 250);