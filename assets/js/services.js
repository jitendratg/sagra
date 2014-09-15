angular.module('sagra')
	.value('Sites', [
		{
			id: 1,
			name: 'My first site',
			domain: 'example.com',
			status: 1
		}
	])
	.factory('User', function() {
		return {
			id: 0,
			name: '',
			clean: function() {
				this.id = 0;
				this.name = '';
			}
		}
	});