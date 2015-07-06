// Helper filter function for use with delegated events

// Supply a collection of elements for criteria and the event 
// listener to be assigned where an element matches criteria
var delegate = function(criteria, listener) {
	return function(e) {
		var el = e.target;
		do {
			if(!criteria(el)) continue;
			e.delegateTarget = el;
			listener.apply(this, arguments);
			
			return;
		} while( (el = el.parentNode) );
	};
};

// Usage example
var filter = function(elem) { 
	return elem.classList && elem.classList.contains("filterClass"); 
};

var handler = function(e) {
	console.log('event handler fired');
};

// Event bubbling allows us to assign our event listener to a parent or root element
var parentElement = document.querySelector('.someClass');
parentElement.addEventListener('click', delegate(filter, handler));