var app = angular.module('pixelFunApp',[]);

app.factory('pixelFactory',[function(){
	var o = {
		pixels: [
		{value:101, x:-1, y:-1},
		{value:102, x:-2, y:-2}]
	};
	o.generate = function() {
		pixels = [];
		for (i = 0; i < 100; i++) {
			pixels[i] = {
				value: i,
				y: Math.floor(i/10)*50,
				x: (i % 10)*50,
				color: "#FFF"
			}
		};
		return pixels;
	}
	return o;
}]);

app.factory('colorFactory',[function() {
	var o = {
		colors: ["Red","Orange","Yellow","Green","Blue","Purple","White","Black"]
	};
	return o;
}])

app.controller('MainCtrl', [
	'$scope',
	'pixelFactory',
	'colorFactory',
	function($scope, pixelFactory, colorFactory){
		$scope.testing = "Check!";
		$scope.garbageAd = "garbageAd1.gif";
		$scope.pixels = pixelFactory.generate();
		$scope.colors = colorFactory.colors;
		$scope.currentGarbage = 1;
		$scope.garbageImg = "url('images/garbageAd" + $scope.currentGarbage + ".gif');"
		console.log($scope.garbageImg);
		$scope.selectedColor = "White";
		$scope.changeColor = function(pixval) {
			// console.log("SelectedColor: " + $scope.selectedColor);
			// console.log("Pixval: " + pixval);
			$scope.pixels[pixval].color = $scope.selectedColor;
		}
		$scope.pickColor = function(newColor) {
			$scope.selectedColor = newColor;
		}
		$scope.changeGarbage = function() {
			$scope.currentGarbage += 1;
			if ($scope.currentGarbage > 7) {$scope.currentGarbage = 1;}
			$scope.garbageImg = "url('images/garbageAd" + $scope.currentGarbage + ".gif');"
		}
		$scope.subscribe = function() {
			$scope.interrupt = 1;
		}
}]);