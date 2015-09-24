var app = angular.module('myApp', [])
var mainControllerFunc = function($scope) {
	

	var Player = function(items, gold, hp, attackpower) {
		this.items = items
		this.gold = gold
		this.hp = hp
		this.attackpower = attackpower
	}

	$scope.player = new Player(["sword", "wool hat", "grappling hook"], 10, 20, 10)

	var Monster = function(name, hp, items, gold, attackpower) {
		this.name  = name;
		this.hp    = hp;
		this.items = items;
		this.attackpower = attackpower
	}

	$scope.rooms = []
	var Room = function(monster, items, active) {
		this.monster = monster;
		this.items = items;
		this.active = false
	}
	
	var room1 = new Room()
	var room2 = new Room()
	var room3 = new Room()
	var room4 = new Room()
	var room5 = new Room()
	var room6 = new Room()
	var room7 = new Room()
	var room8 = new Room()
	var room9 = new Room()
	var room10 = new Room()
	var room11 = new Room()
	var room12 = new Room()
	var room13 = new Room()
	var room14 = new Room()
	var room15 = new Room()
	var room16 = new Room()
	var room17 = new Room()
	var room18 = new Room()
	var room19 = new Room()
	var room20 = new Room()
	var room21 = new Room()
	var room22 = new Room()
	var room23 = new Room()
	var room24 = new Room()
	var room25 = new Room()
	var room26 = new Room()
	var room27 = new Room()
	var room28 = new Room()
	var room29 = new Room()
	var room30 = new Room()

	room1.active = true
	$scope.activeRoom = $scope.rooms[0]
	$scope.activeIndex = 0
	
	$scope.rooms.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30)

	$scope.needToEnterName = true;
	$scope.enter = function() {
		$scope.needToEnterName = false
	}

	$scope.greeting = 'enter into my world'
	$scope.moveUpDown = 0;
	$scope.moveLeftRight = 0;
	$scope.handleKeydown = function(event){
		//down
		if ( event.which === 40 && $scope.moveUpDown <= 200	) {
		    $scope.moveUpDown += 55;
		    $scope.activeIndex += 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]

		}

		//up
		if ( event.which === 38 && $scope.moveUpDown > 0) {
		  	$scope.moveUpDown -= 55;
		  	$scope.activeIndex -= 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		}
		
		//left
		if (event.which === 37 && $scope.moveLeftRight > 0 ) {
		   	$scope.moveLeftRight -= 50
		   	$scope.activeIndex -= 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		}
		//right
		if (event.which === 39 && $scope.moveLeftRight <= 200) {
		   	$scope.moveLeftRight += 50;
		   	$scope.activeIndex += 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]

		}
		
	}






}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])