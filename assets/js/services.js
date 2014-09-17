angular.module('sagra')
	.value('Sites', [
		{
			id: 1,
			name: 'My first site',
			domain: 'example.com',
			status: 1,
			version: '1.0.1'
		}
	])
	.value('User', {id: '0'});