// IIFE
var viewPreview = (function viewPreview() {
	
	// Declare view variables
	
	var data = null;
	var socket = null;
	var renderer = null;
	var form = null;
	
	// Store a reference to the socket
	var _setSocket = function _setSocket(socket) {
		socket = socket;
		console.log('set socket');
		console.dir(socket);
		
	};
	
	// Register view event listeners
	var _registerEventListeners = function _registerEventListeners() {
		document.addEventListener('build.view.preview', _handleBuildViewEvent, false);
	};
	
	// Reset view variables
	var _resetView = function _resetView() {
		data = null;
	};
	
	// Prepare and build view
	var _handleBuildViewEvent = function _handleBuildViewEvent(event) {
		_resetView();
		if( document.getElementById('page-view-preview') != null) {
			_handleDestroyViewEvent();
		}
		if( document.getElementById('preloader') != null) {
			preloader.destroy();
		}
		
		data = event.payload;
		
		_buildView();
	};
	
	// Remove view from HTML page
	var _handleDestroyViewEvent = function _handleDestroyViewEvent() {
		document.body.removeChild(document.getElementById('page-view-preview'));
	};
	
	// Build the view components
	var _buildView = function _buildView() {
		//console.log('building view...');
		var page = document.createElement('div');
		page.setAttribute('id', 'page-view-preview');
		document.body.appendChild(page);
		
		var logo = document.createElement('div');
		logo.setAttribute('class', 'skyworks-logo');
		logo.setAttribute('id', 'skyworks-logo');
		logo.onclick = _redirectToWelcomeView;
		page.appendChild(logo);
		
		var logoTextContainer = SVG('skyworks-logo').size(200, 80);
		var logoText = logoTextContainer.text("Sky Works");
		logoText.attr('x', 0)
		logoText.font({
			family:   'sky-text-medium'
			, size:     40
			, anchor:   'left'
		});
		
		var gradient = logoTextContainer.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		logoText.fill(gradient);
		
		var title = document.createElement('div');
		title.setAttribute('id', 'preview-title');
		title.setAttribute('class', 'preview-title');
		page.appendChild(title);
		
		var titleTextContainer = SVG('preview-title').size(180, 80);
		var titleText = titleTextContainer.text("Your HTML\nencoded text");
		titleText.attr('x', 100)
		titleText.font({
			family:   'sky-text-regular'
			, size:     30
			, anchor:   'middle'
			, leading:  '1em'
		});
		
		var gradient = titleTextContainer.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		titleText.fill(gradient);
		
		var copy = document.createElement('div');
		copy.setAttribute('id', 'preview-copy');
		copy.setAttribute('class', 'preview-copy');
		page.appendChild(copy);
		
		var copyTextContainer = SVG('preview-copy').size(350, 40);
		var copyText = copyTextContainer.text("Preview your copy below, press the copy to clip board\nbutton below to copy the text.");
		copyText.font({
			family:   'sky-text-regular'
			, size:     16
			, anchor:   'left'
			, leading:  '1em'
		});
		copyText.attr('fill', '#0756a7');
		
		var horizontalRule = document.createElement('div');
		horizontalRule.setAttribute('id', 'horizontal-rule');
		horizontalRule.setAttribute('class', 'horizontal-rule');
		page.appendChild(horizontalRule);
		
		var horizontalRuleContainer = SVG('horizontal-rule').size(350, 2);
		var horizontalRuleLine = horizontalRuleContainer.rect(350, 2);
		
		var gradient = horizontalRuleContainer.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		horizontalRuleLine.fill(gradient);
		
		var previewFileContainer = document.createElement('div');
		previewFileContainer.setAttribute('class', 'preview-page-file-upload-container');
		page.appendChild(previewFileContainer);
		
		var textarea = document.createElement('div');
		textarea.setAttribute('id', 'preview-page-file-output');
		textarea.setAttribute('class', 'preview-page-file-output');
		textarea.textContent = data;
		previewFileContainer.appendChild(textarea);
		
		var copyButton = document.createElement('input');
		copyButton.setAttribute('id', 'welcome-page-file-submit');
		copyButton.setAttribute('type', 'button');
		copyButton.setAttribute('class', 'welcome-page-file-submit');
		copyButton.setAttribute('value', 'Copy to clip board');
		copyButton.onclick = _copyToClipBoard;
		previewFileContainer.appendChild(copyButton);
		
	};
	
	// Copy to clip board
	var _copyToClipBoard = function _copyToClipBoard() {
		console.log(data);
		_copy(data);
	};
	
	// Dispatch event to show a view
	var _redirectToWelcomeView = function _redirectToWelcomeView() {
		
		_resetView();
		
		_handleDestroyViewEvent();
		preloader.create();
		
		window.location = "/";
	};
	
	var _copy = function _copy(text) {
		var input = document.createElement('input');
		input.setAttribute('value', text);
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input)
	};
	
	return {
		setSocket : _setSocket,
		registerEventListeners : _registerEventListeners,
		reset : _resetView,
	}
})();