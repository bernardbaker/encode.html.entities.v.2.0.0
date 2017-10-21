// Built by Bernard T. A. Baker for Sky Works
var Encoder = require('node-html-encoder').Encoder;

// entity type encoder
var encoder = new Encoder('entity');

// Initialise the renderer variables
var xssValue = null;

// Process the characters
function convert(value, callBackFunction) {
	console.log(value);
	
	var xssValue = encoder.htmlEncode(value)
	
	callBackFunction(xssValue);
};

// Store a reference to the processed characters
function setData(value) {
	console.log(value);
	xssValue = value;
};

// Retrieve the processed characters
function getData() {
	return xssValue;
};

// Foo test function
function foo() {
	console.log('foo called');
	return true;
};

// Reset the renderer variables
function resetRendererVariables() {
	xssValue = null;
};

// Expose an API on the renderer module
module.exports.convert = convert;
module.exports.setData = setData;
module.exports.getData = getData;
module.exports.foo = foo;
module.exports.resetRendererVariables = resetRendererVariables;