var _renderer = require('./renderer');
var _socket = null;

module.exports.getRenderer = function getRenderer() {
	return _renderer;
}

module.exports.getSocket = function getSocket() {
	return _socket;
}

module.exports.setup = function setup(io) {
	
	io.on('connection', function(socket){
		console.log('server connection established...');
		
		_socket = socket;
		
		_socket.on('encode', function(data){
			console.log('client sent: ', data);
			var result = _renderer.convert(data, _convertCallBackHandler);
		});
		
		var _convertCallBackHandler = function _converCallBackHandler(payload) {
			console.log(payload);
			_socket.emit("response", payload);	
		}
		
		_socket.on('resetRendererVariables', function() {
			_renderer.resetRendererVariables();
		});
		
	});
	
}