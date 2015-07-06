var $ = require('jQuery');

var Module2 = (function() {
	var bar = function() {
		console.log('bar');	
		
		// Trigger Module1.Foo via event
		var event = new Event('triggerFoo');
		document.dispatchEvent(event);
	};
	
	return {
		bar: bar
	};
})();

module.exports = Module2;