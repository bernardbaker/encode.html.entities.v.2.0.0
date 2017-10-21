// IIFE
var viewWelcome = (function viewWelcome() {
	
	// Declare view variables
	var page = null;
	var characterToBeProcessed = null;
	var socket = null;
	var form = null;
	
	// Store a reference to the socket
	var _setSocket = function _setSocket(socket) {
		socket = socket;
	};
	
	// Register view event listeners
	var _registerEventListeners = function _registerEventListeners() {
		document.addEventListener('build.view.welcome', _handleBuildViewEvent, false);
		document.addEventListener('encode.response', _handleEncodeReponseEvent, false);
		
	};
	
	// Reset view variables
	var _resetView = function _resetView() {
		page = null;
		characterToBeProcessed = null;
		form = null;
	};
	
	// Prepare and build view
	var _handleBuildViewEvent = function _handleBuildViewEvent(event) {
		//console.log(event.type);
		_resetView();
		
		_buildView();
	};
	
	// Remove view from HTML page
	var _handleDestroyViewEvent = function _handleDestroyViewEvent() {
		document.body.removeChild(document.getElementById('page-view-welcome'));
	};
	
	// Build the view components
	var _buildView = function _buildView() {
		//console.log('building view...');
		
		page = document.createElement('div');
		page.setAttribute('id', 'page-view-welcome');
		page.setAttribute('class', 'page-view-welcome');
		document.body.appendChild(page);
		
		var logo = document.createElement('div');
		logo.setAttribute('class', 'skyworks-logo');
		logo.setAttribute('id', 'skyworks-logo');
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
		title.setAttribute('id', 'welcome-title');
		title.setAttribute('class', 'welcome-title');
		page.appendChild(title);
		
		var titleTextContainer = SVG('welcome-title').size(180, 80);
		var titleText = titleTextContainer.text("HTML Text\nEncoder");
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
		copy.setAttribute('id', 'welcome-copy');
		copy.setAttribute('class', 'welcome-copy');
		page.appendChild(copy);
		
		var copyTextContainer = SVG('welcome-copy').size(350, 40);
		var copyText = copyTextContainer.text("Guidelines for use: Simply paste your text into\nthe box below.");
		copyText.font({
			family:   'sky-text-regular'
			, size:     16
			, anchor:   'left'
			, leading:  '1em'
		});
		copyText.attr('fill', '#0756a7');
		
		var horizontalRule01 = document.createElement('div');
		horizontalRule01.setAttribute('id', 'horizontal-rule-01');
		horizontalRule01.setAttribute('class', 'horizontal-rule');
		page.appendChild(horizontalRule01);
		
		var horizontalRuleContainer01 = SVG('horizontal-rule-01').size(350, 2);
		var horizontalRuleLine01 = horizontalRuleContainer01.rect(350, 2);
		
		var gradient01 = horizontalRuleContainer01.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		horizontalRuleLine01.fill(gradient01);
		
		var convertCharactersContainer = document.createElement('div');
		convertCharactersContainer.setAttribute('class', 'welcome-page-file-upload-container');
		page.appendChild(convertCharactersContainer);
		
		var textarea = document.createElement('textarea');
		textarea.setAttribute('id', 'welcome-page-file-input');
		textarea.setAttribute('class', 'welcome-page-file-input');
		textarea.setAttribute('name', 'characters');
		textarea.setAttribute('placeholder', 'Paste your text here');
		textarea.oninput = _textareaOnChange;
		convertCharactersContainer.appendChild(textarea);
		
		var horizontalRule02 = document.createElement('div');
		horizontalRule02.setAttribute('id', 'horizontal-rule-02');
		horizontalRule02.setAttribute('class', 'horizontal-rule');
		convertCharactersContainer.appendChild(horizontalRule02);
		
		var horizontalRuleContainer02 = SVG('horizontal-rule-02').size(350, 2);
		var horizontalRuleLine02 = horizontalRuleContainer02.rect(350, 2);
		
		var gradient02 = horizontalRuleContainer02.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		horizontalRuleLine02.fill(gradient02);
		
		var copyButton = document.createElement('input');
		copyButton.setAttribute('id', 'welcome-page-encode-button');
		copyButton.setAttribute('type', 'button');
		copyButton.setAttribute('class', 'welcome-page-encode-button');
		copyButton.setAttribute('value', 'Copy to clip board');
		copyButton.onclick = _copyToClipBoard;
		convertCharactersContainer.appendChild(copyButton);
		
		var clearButton = document.createElement('input');
		clearButton.setAttribute('id', 'welcome-page-clear-button');
		clearButton.setAttribute('type', 'button');
		clearButton.setAttribute('class', 'welcome-page-clear-button');
		clearButton.setAttribute('value', 'Start again');
		clearButton.onclick = _clearTextAndClipBoard;
		convertCharactersContainer.appendChild(clearButton);
		
		
		var horizontalRule03 = document.createElement('div');
		horizontalRule03.setAttribute('id', 'horizontal-rule-03');
		horizontalRule03.setAttribute('class', 'horizontal-rule');
		convertCharactersContainer.appendChild(horizontalRule03);
		
		var horizontalRuleContainer03 = SVG('horizontal-rule-03').size(350, 2);
		var horizontalRuleLine03 = horizontalRuleContainer03.rect(350, 2);
		
		var gradient03 = horizontalRuleContainer03.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		horizontalRuleLine03.fill(gradient03);
		
		var previewCharactersContainer = document.createElement('div');
		previewCharactersContainer.setAttribute('class', 'preview-page-file-upload-container');
		convertCharactersContainer.appendChild(previewCharactersContainer);
		
		var textarea = document.createElement('div');
		textarea.setAttribute('id', 'preview-page-file-output');
		textarea.setAttribute('class', 'preview-page-file-output');
		textarea.textContent = "";
		previewCharactersContainer.appendChild(textarea);
		
		
		
	};
	
	// Text input on change handler
	var _textareaOnChange = function _textareaOnChange(event) {
		characterToBeProcessed = event.target.value;
		
		if(!characterToBeProcessed.length) {
			alert('Please enter some characters');
		}
		
		var trigger = document.createEvent('Event');
		trigger.initEvent('encode.characters', true, true);
		trigger.payload = characterToBeProcessed;
		document.dispatchEvent(trigger);
	};
	
	// Copy to clip board
	var _copyToClipBoard = function _copyToClipBoard() {
		_copy(data);
	};
	
	var _copy = function _copy(text) {
		var text = $('#preview-page-file-output').clone().find('br').prepend('\r\n').end().text();
		element = $('<textarea>').appendTo('body').val(text).select();
		document.execCommand('copy');
		element.remove();
	};
	
	var _handleEncodeReponseEvent = function _handleEncodeReponseEvent(event) {
		console.log('client updated with: ', event.payload);
		data = event.payload;
		document.getElementById('preview-page-file-output').textContent = event.payload;
	};
	
	var _clearTextAndClipBoard = function _clearTextAndClipBoard(event) {
		document.getElementById('welcome-page-file-input').value = "";
		document.getElementById('welcome-page-file-input').innerHTML = "";
		document.getElementById('preview-page-file-output').textContent = "";
		_copy(' ');
	};
	
	return {
		setSocket : _setSocket,
		registerEventListeners : _registerEventListeners,
		reset : _resetView
	}
})();