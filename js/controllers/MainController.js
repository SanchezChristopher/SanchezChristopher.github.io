app.controller('MainController', ['$scope', function($scope) { 
  //setting test to a string
  $scope.test = 'First test with AngularJS';
  
  //setting up an array of objects
  $scope.dogs = [
  {
	  name: 'Klaus',
	  breed: 'Shetland Sheepdog',
	  cover: 'img/2.jpg',
	  likes: 0
  },
  {
	  name: 'Duke',
	  breed: 'Shiba Inu',
	  cover: 'img/3.jpg',
	  likes: 0
  }
  ]
  
  $scope.plusOne = function(index){
	  $scope.dogs[index].likes += 1;
  }
  
  //------------------old code------------------
  /*setting dog equal to an object with properties name and breed
  $scope.dog = {
	  name: 'Klaus',
	  breed: 'Shetland Sheepdog'
  }
  */
}]);