// IIFE
var preloader = (function preloader() {
	
	// Create the visual elements of the preloader
	var _create = function _create(callBackFunction) {
		
		// Create a div to hold the content.
		var div = document.createElement('div');
		div.setAttribute('id', 'preloader');
		div.style.position = 'absolute';
		document.getElementById('body').appendChild(div);
	
		// Create an image to hold the spinning circle.
		var i1 = new Image();
		i1.setAttribute('class', 'image-1');
		i1.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2Vu ZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1 Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVy c2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3Jn LzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94 bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii01ODIgNTYgMTUwIDE1 MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtNTgyIDU2IDE1MCAxNTA7 IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+ DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOnVybCgjU1ZHSURfMV8pO3N0cm9rZS13 aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEw O30NCjwvc3R5bGU+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFk aWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii01MzQuOTEyMyIgeTE9IjE0 OC4zMjI4IiB4Mj0iLTQ4Ni42NzgyIiB5Mj0iMTA3Ljg0OTYiIGdyYWRpZW50VHJh bnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNjMpIj4NCgk8c3RvcCAgb2Zmc2V0 PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRjA4MzAwIi8+DQoJPHN0b3AgIG9mZnNl dD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0UzMDAwRiIvPg0KPC9saW5lYXJHcmFk aWVudD4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNTE0LjMsMTAxLjVjLTEzLjMs My4xLTIzLDE1LjItMjMsMjkuM2MwLDE2LjYsMTMuNCwzMCwzMCwzMGMxNiwwLDI5 LjEtMTIuNiwzMC0yOC4zYzAtMC41LDAtMS4yLDAtMS43Ii8+DQo8L3N2Zz4NCg==";
		i1.onload = function(e){
			div.appendChild(i1);
		};
	
		// Create an image to hold the spinning circle.
		var i2 = new Image();
		i2.setAttribute('class', 'image-2');
		i2.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2Vu ZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1 Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVy c2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3Jn LzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94 bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii01ODIgNTYgMTUwIDE1 MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtNTgyIDU2IDE1MCAxNTA7 IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+ DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOnVybCgjU1ZHSURfMV8pO3N0cm9rZS13 aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEw O30NCjwvc3R5bGU+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFk aWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii00OTYuNzM4IiB5MT0iMTUx Ljg4OTIiIHgyPSItNTIxLjY3NTMiIHkyPSIxMDguNjk2NiI+DQoJPHN0b3AgIG9m ZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UzMDAwRiIvPg0KCTxzdG9wICBv ZmZzZXQ9IjAuNDciIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzI4NzkiLz4NCgk8c3Rv cCAgb2Zmc2V0PSIwLjg2IiBzdHlsZT0ic3RvcC1jb2xvcjojMDY0NDk3Ii8+DQo8 L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS01MjIuNywx NTFjOSw1LjYsMjEsNC40LDI4LjgtMy40YzkuMi05LjIsOS4yLTI0LDAtMzMuMWMt OC44LTguOC0yMy05LjEtMzIuMi0wLjljLTAuMywwLjMtMC43LDAuNi0xLDAuOSIv Pg0KPC9zdmc+DQo=";
		i2.onload = function(e){
			div.appendChild(i2);
		};
		
		// Create an SVG message stating: Loading please wait...
		var message = document.createElement('div');
		message.setAttribute('id', 'preloader-message');
		message.setAttribute('class', 'image-3');
		div.appendChild(message);
		
		var messageTextContainer = SVG('preloader-message').size(300, 300);
		var messageText = messageTextContainer.text("Loading please wait...");
		messageText.attr('x', 100)
		messageText.font({
			family:   'sky-text-regular'
			, size:     20
			, anchor:   'middle'
			, leading:  '1em'
		});
		
		var gradient = messageTextContainer.gradient('linear', function(stop) {
			stop.at(0, '#f6871f')
			stop.at(0.35, '#ed1c24')
			stop.at(0.80, '#a43383')
			stop.at(1, '#0052a4')
		});
		
		messageText.fill(gradient);
	
		document.getElementById('preloader').style.left = ( Math.floor(window.innerWidth * 0.5) - 75 ) + 'px';
		document.getElementById('preloader').style.top = ( Math.floor(window.innerHeight * 0.5) - 90 ) + 'px';
	
		// Handle the window resize event and position the elements.
		window.onresize = function(e) {
			document.getElementById('preloader').style.left = ( Math.floor(window.innerWidth * 0.5) - 75 ) + 'px';
			document.getElementById('preloader').style.top = ( Math.floor(window.innerHeight * 0.5) - 90 ) + 'px';
		};
	
		// Trigger the window resize event.
		var trigger = document.createEvent('CustomEvent');
		trigger.initCustomEvent('resize', false, false, null);
		window.dispatchEvent(trigger);
		
		if(callBackFunction != null) {
			callBackFunction();
		}
	};
	
	// Remove the preloader
	var _destroy = function _destroy(callBackFunction) {
		window.onresize = null;
		if( document.getElementById('preloader') != null ) {
			document.body.removeChild(document.getElementById('preloader'));
		}
		if(callBackFunction != null) {
			callBackFunction();
		}
	}
	
	return {
		create : _create,
		destroy : _destroy	
	}
	
})();