var app = angular.module('myApp', [])
var mainControllerFunc = function($scope) {
	
	$scope.player = {
		name      : 'U',
		inventory : ["sword", "wool hat", "grappling hook"],
		gold      : 10,
		hp        : 20,
	}

	$scope.monsters = []
	var Monster = function(name, hp, items) {
		this.name  = name;
		this.hp    = hp;
		this.items = items;
	}

	var cyclops = new Monster('cyclops', 10, ['goopy eye'])
	var medusa = new Monster('medusa', 25, ['stone wang'])
	$scope.monsters.push(cyclops)
	$scope.monsters.push(medusa)

	console.log($scope.monsters)

	$scope.rooms = [
	{
		monsters : [],
		items    : [],
	},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	]


	console.log($scope.player)
	$scope.greeting = 'enter into my world'
	$scope.moveUpDown = 0;
	$scope.moveLeftRight = 0;
	$scope.handleKeydown = function(event){
		//down
		if ( event.which === 40 ) {
		    $scope.moveUpDown += 55;
		}

		//up
		if ( event.which === 38 ) {
		  	$scope.moveUpDown -= 55;
		}
		
		//left
		if (event.which === 37 ) {
		   	$scope.moveLeftRight -= 50
		}
		//right
		if (event.which === 39 ) {
		   	$scope.moveLeftRight += 50
		}
		
	}





}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])