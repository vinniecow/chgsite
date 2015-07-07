'use strict';
'use strict';

/**
 * @ngdoc function
 * @name chgApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the chgApp
 */
angular.module('chgApp')
  .controller('HeaderCtrl', function ($location) {
  	this.locPath="header";
    this.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
	};
  });
