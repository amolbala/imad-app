console.log('Loaded!');

var img = document.getElementById('madi');
var marginLeft = 0;
var marginRight = 0;
function moveRight () {
    marginLeft =  marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
function moveLeft () {
    marginRight = marginRight + 1;
    img.style.marginRight = marginRight + "px";
}
img.onclick = function () {
    console.log(marginRight);
    var interval = setInterval(moveRight, 50);
};