// IIFE
var app = (function app() {
	
	// Start the application
	var _start = function _start() {
		
		controller.applicationStart();
		controller.registerEventListeners();
		controller.registerApplicationViews();
		
		var trigger = document.createEvent('Event');
		trigger.initEvent('view.welcome', true, true);
		document.dispatchEvent(trigger);
		
	};
	
	// Start the preview view
	var _startPreviewView = function _startPreviewView() {
		controller.startViewPreview();
		controller.registerPreviewViewEventListeners();
		controller.registerPreviewView();		
	};
	
	return {
		start : _start,
		startPreviewView : _startPreviewView
	}
})();