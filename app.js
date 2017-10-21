// Built by Bernard T. A. Baker for Sky Works
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socket = require('./socket');
socket.setup(io);
var formidable = require('formidable');
var _res = null;
app.use(express.static('public/'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.render('index.html');
});

app.post('/encode', function(req, res) {
	_res = res;
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		if(err) {
			console.log(err);
			socket.getSocket().emit('upload.error', {data:err});
		}
		socket.getRenderer().convert(fields.characters, _handleCharacterProcessingCallBack);
	});	
});

app.use(function(req, res, next) {
	res.render('index.html');
});

server.listen( process.env.PORT || 3000, function() {
	console.log('Open a web browser, type http://localhost:'+ (process.env.PORT != null ? process.env.PORT + '. And away you go..' : 3000 +'. And away you go..') );
});

function _handleCharacterProcessingCallBack(data) {
	socket.getRenderer().setData(data);
	_res.render('preview.html');
}