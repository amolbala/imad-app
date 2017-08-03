var express = require('express');
var morgan = require('morgan');
var path = require('path');


var article_one = {
    title: 'abbunini | Article One',
    heading: 'Article One',
    date: '3 August 2017',
    content: `<p>
            This is the content of the web page. This is the content of the web page. <br>
            My name is Amol. I have a cute little brother called Bala :).
            </p>`,
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/article_one.html', function (req, res) {
  res.send(createTemplate(article_one));
});

app.get('/ui/article_two.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/ui/article_three.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
