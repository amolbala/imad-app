var express = require('express');
var morgan = require('morgan');
var path = require('path');


var articles = {
    'article_one': {
        title: 'abbunini | Article One',
        heading: 'Article One',
        date: '3 August 2017',
        content: `<p>
                This is the content of the web page. This is the content of the web page. <br>
                My name is Amol. I have a cute little brother called Bala :).
                </p>`,
    },
    'article_two': {
        title: 'abbunini | Article Two',
        heading: 'Article Two',
        date: '3 August 2017',
        content: `<p>
                This is the content of the web page. This is the content of the web page. <br>
                My name is Amol. I have a very smart father called Venkat :D.
                </p>`,
    },
    'article_three': {
        title: 'abbunini | Article Three',
        heading: 'Article Three',
        date: '3 August 2017',
        content: `<p>
                This is the content of the web page. This is the content of the web page. <br>
                My name is Amol. I have a very smart mother called Rama :D.
                </p>`,
    },
};

function createTemplate (data)  {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name = "viewport" content = "width-device-width, initial-scale-1" />
        </head>
        <body class = "container">
            <a href = "/">Home</a>
            <hr>
            <h1>${heading}</h1>
            <h3>${date}</h3>
            ${content}
            <hr>
        </body>
    </html>
    `;
    return htmlTemplate;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});
var names = [];
app.get('/submit-name/:name',function (req, res) {
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

//app.get('/ui/article_one.html', function (req, res) {
  //res.send(createTemplate(article_one));
//});

//app.get('/ui/article_two.html', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
//});

//app.get('/ui/article_three.html', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
//});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
