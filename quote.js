angular.module('quoteModule', [])

angular.module('quoteModule')
	.controller('quoteTroller', [$scope, function($scope){

			$scope.randomQ = {}
			$scope.quotes = [

				{
					Author: 'Albus Dumbledore',
					Text: 'It does not do to dwell on dreams and forget to live.',
					Rating: '' 
				},
				{
					Author: 'Garfield',
					Text: 'Diet is die with a t.',
					Rating: '' 
				},
				{
					Author: 'Dr. Seuss',
					Text: "Be who you are and say what you feel, because those who mind don’t
					matter and those who matter don’t mind.",
					Rating: '' 
				}
			]


	$scope.addQuote = function(event){ 
 			var newQuote = { 
 				author: $scope.addAuthor, 
 				text: $scope.addText, 
 			} 
 			$scope.quotes.push(newQuote) 
 			event.preventDefault(); 
 			$scope.addAuthor = '' 
 			$scope.addText = '' 
 		} 



			


	}])