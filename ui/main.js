console.log('Loaded!');

var img = document.getElementById('madi');
var leftMargin = 0;
var rightMargin = 0;
function moveRight () {
    leftMargin =  leftMargin + 1;
    img.style.marginLeft = leftMargin + "px";
}
function moveLeft () {
    rightMargin = rightMargin + 1;
    img.style.marginRight = rightMargin + "px";
}
img.onClick = function () {
    var interval = setInterval(moveRight, 50);
};