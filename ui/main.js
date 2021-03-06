console.log('Loaded!');

/*
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
*/

// Counter code
var button = document.getElementById('counter');


button.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    // Make the request
    request.open('GET', 'http://abbunini.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i = 0; i < names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};