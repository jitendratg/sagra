angular.module('sagra')
	.filter('condition', function () {
		return function(input, trueValue, falseValue) {
			return input ? trueValue : falseValue;
		};
	});