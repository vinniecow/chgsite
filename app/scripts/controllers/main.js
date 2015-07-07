'use strict';

/**
 * @ngdoc function
 * @name chgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chgApp
 */
 angular.module('chgApp')
 .controller('MainCtrl', function ($scope) {
 	$scope.myInterval = 5000;
 	var slides = $scope.slides = [];
 	$scope.addSlide = function() {
 		slides.push({
 			image: 'images/image' + slides.length + '.jpg',
 			text: ['UTA Track','Uptown Center','description 3','description 4',
 			'description 5','description 6','description 7','description 8',
 			'description 9', 'description 10'][slides.length % 9] 
 		});
 	};
 	for (var i=0; i<9; i++) {
 		$scope.addSlide();
 	}
 });
