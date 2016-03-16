var volunteers = angular.module('volunteersApp', [])
.config(function($locationProvider){
    //uncomment below to use Angular for page routing
    // $locationProvider.html5Mode(true);
  });

volunteers.controller('volunteersCtrl', function ($scope, $http) {

	$scope.sortType     = 'volunteer.name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.search   	= '';     // set the default search/filter term
  $scope.newVolunteer = {}; // create object to contain new volunteer
  $scope.messages = {}; // create object to contain messages to the user

  $scope.locations = [
    {name:'McPherson Square'},
    {name:'Navy Yard'}
  ];

  $scope.positions = [
    {name:'Volunteer'},
    {name:'Team Leader'}
  ];

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

// Search
$scope.filterFunction = function(element) {
	return element.name.match(/^Ma/) ? true : false;
};

// Get Volunteers
$scope.getVolunteers = function() {
    config ={};
    $http.get("/api/volunteers", config, {}).
  		success(function(data) {
    	$scope.volunteers = data.all;
    	// window.console.log($scope.volunteers);
    });
}

// Single Volunteer
$scope.singleVolunteer = function(value) {
    $scope.id = value;
    config ={};
    $http.get("/api/volunteers/" + $scope.id, config, {}).
      success(function(data) {
      $scope.singleVolunteer = data.volunteer;
      // window.console.log($scope.volunteer);
    });
}


// Add volunteer
$scope.addVolunteer = function() {
  $scope.messages.addVolunteer = {};
  	var url = '/api/addVolunteer/';
  	$http.post(url, $scope.newVolunteer)
      .success(function(data){
        // window.console.log(data);
        $scope.newVolunteer = {};
        $scope.messages.addVolunteer.success = "Thanks for signing up! Sign up your friends too!"
      })
      .error(function(data,status){
        // window.console.log(data + status);
        $scope.messages.addVolunteer.error = "Error encountered while adding volunteer.";
      });
}

// Remove volunteer
$scope.removeVolunteer = function(value) {
  // value is the volunteer id
	var url = '/api/removeVolunteer/'+ value;
	$http.delete(url)
    .success(function(data){
      // window.console.log(data);
      $scope.getVolunteers();
    })
    .error(function(data,status){
      // window.console.log(data + status);
    });
}


});
