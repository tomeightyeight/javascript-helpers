var Module1 = (function() {
	var foo = function() {
		console.log('foo');
	};
	
	// Event Listeners
	document.addEventListener('triggerFoo', function(e) {
		foo();
	});
	
	return {
		foo: foo
	};
})();

module.exports = Module1;