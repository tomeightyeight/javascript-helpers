(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var module1 = require('./modules/module1');
var module2 = require('./modules/module2');
var module3 = require('./modules/module3');

module2.bar();
},{"./modules/module1":2,"./modules/module2":3,"./modules/module3":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
var Module3 = (function() {
	var baz = function() {
		console.log('baz');
	};
	
	return {
		baz: baz
	};
})();

module.exports = Module3;
},{}]},{},[1]);
