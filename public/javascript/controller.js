// IIFE
var controller = (function controller() {
	
	// Store a reference to the socket
	var _socket = null;
	
	// Store a reference to the encoded data
	var _data = null;
	
	// Register all application events
	var _registerEventListeners = function _registerEventListeners() {
		document.addEventListener('app.restarted', _handleAppliactionRestartEvent, false);
		document.addEventListener('view.welcome', _handleViewWelcomeEvent, false);
		document.addEventListener('encode.characters', _handleEncodeCharactersEvent, false);
		
	};
	
	// Register all application events
	var _registerPreviewViewEventListeners = function _registerPreviewViewEventListeners() {
		document.addEventListener('app.restarted', _handleAppliactionRestartEvent, false);
	};
	
	// Create a socket
	var _applicationStart = function _applicationStart(event) {
		_socket = io.connect("/");
        _socket.on("connect", function(){
			console.log("client connected!")
            
        });
		
		_socket.on("encode.data", function(data){
			console.log("encode.data");
			console.log(data);
        });
		
		_socket.on("response", function(data){
			console.log("response from server:");
			console.dir(data);
        });
		
		_socket.on('upload.error', function(data) {
			console.dir(data);
		});
	};
	
	// Create a socket
	var _handleEncodeCharactersEvent = function _handleEncodeCharactersEvent(event) {
		_socket = io.connect("/");
        _socket.on("connect", function(){
			console.log("Character encoding requested!")
			_socket.emit("encode", event.payload);
        });
		
		_socket.on('response', function(data) {
			_data = data;
			var trigger = document.createEvent('Event');
			trigger.initEvent('encode.response', true, true);
			trigger.payload = _data;
			document.dispatchEvent(trigger);
		});
	};
	
	// Register view event listeners
	var _registerApplicationViews = function _registerApplicationViews() {
		viewWelcome.setSocket(_socket);
		viewWelcome.registerEventListeners();
	};
	
	// Register view event listeners
	var _registerPreviewView = function _registerPreviewView() {
		viewPreview.setSocket(_socket);
		viewPreview.registerEventListeners();
	};
	
	// Reset application components
	var _handleAppliactionRestartEvent = function _handleAppliactionRestartEvent(event) {
		//console.log(event.type);
		_socket.emit("resetRendererVariables");
		viewWelcome.reset();
	};
	
	// Create the welcome view
	var _handleViewWelcomeEvent = function _handleViewWelcomeEvent(event) {
		//console.log(event.type);
		var trigger = document.createEvent('Event');
		trigger.initEvent('build.view.welcome', true, true);
		document.dispatchEvent(trigger);
	};
	
	return {
		applicationStart : _applicationStart,
		registerEventListeners : _registerEventListeners,
		registerApplicationViews : _registerApplicationViews	
	}
})();