// jQuery Plugin / Extension Boilerplate

// Self invoking anonymous function expression so that we can have encapsulation and keeps 
// our plugin compatible with jQuery.noConflict (for example if multiple libraries being used)

(function($) {
	// The closure also gives us encapsulation (private and public methods & properties)
	var _privateMethod = function() {
		
	};
	
	var $.fn.publicMethod: function(action, options) {
		var defaults = {
			defaultProperty: 'defaultValue'
		};
		
		// Extend plugin options from defaults
		var options = $.extend(defaults, options);
		
		// Do some stuff based on action - use this
		switch(action) {
			case 'someAction':
				break;
			
			case 'everyElementAction':
				// Loop through collection of elements
				this.each(function() {
					// Do somsething with each element - use this
				});
				break;
			
			default:
				return;
		}
		
		// Return this to make custom jQuery method chainable
		return this;
	};
	
})(jQuery);

// Invoke custom jQuery method
$('selector').publicMethod('action0', { customOption: 'value' });