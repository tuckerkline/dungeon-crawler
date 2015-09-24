var app = angular.module('myApp', [])
var mainControllerFunc = function($scope) {
	

	var Player = function(items, gold, hp, attackpower) {
		this.items = items
		this.gold = gold
		this.hp = hp
		this.attackpower = attackpower
		this.dead = false
	}

	Player.prototype.attack = function(monster) {
		if (monster.dead != true) {
			monster.hp -= this.attackpower;
			this.hp -= monster.attackpower
			console.log(monster.hp)
		}

	}

	$scope.player = new Player(["sword", "wool hat", "grappling hook"], 10, 20, 10)

	var Monster = function(name, hp, items, gold, attackpower, boss) {
		this.name  = name;
		this.hp    = hp;
		this.items = items;
		this.gold = gold;
		this.attackpower = attackpower;
		this.boss = boss
		this.dead = false
	}

	var medusa = new Monster( 'medusa', 10, ['stone rod'], 1, 4, false)
	cyclops = new Monster('Cyclops', 20, ['goopy eye'], 1, 2, false),
	basilisk = new Monster('Basilisk', 24, ['diary'], 5, 4, false),
	giant = new Monster('GIANT!', 50, ['clubbing pants'], 0, 10, false),
	hydra = new Monster('Hydra', 20, ['one of three heads'], 25, 8, false),
	worstEnemy = new Monster ('Your Worst Enemy', 100, ['game winning item'], 1000000, 22, true)


	var Room = function(monster, active) {
		this.monster = monster;
		this.active = false
	}

	// console.log()


	$scope.rooms = [
	room1 = new Room(),
	room2 = new Room(medusa),
	room3 = new Room(worstEnemy),
	room4 = new Room(cyclops),
	room5 = new Room(basilisk),
	room6 = new Room(),
	room7 = new Room(),
	room8 = new Room(),
	room9 = new Room(),
	room10 = new Room(),
	room11 = new Room(),
	room12 = new Room(),
	room13 = new Room(),
	room14 = new Room(),
	room15 = new Room(),
	room16 = new Room(),
	room17 = new Room(),
	room18 = new Room(),
	room19 = new Room(),
	room20 = new Room(),
	room21 = new Room(),
	room22 = new Room(),
	room23 = new Room(),
	room29 = new Room(),
	room24 = new Room(),
	room25 = new Room(),
	room26 = new Room(),
	room27 = new Room(),
	room28 = new Room(),
	room30 = new Room(),
	]
	


	room1.active = true
	$scope.activeRoom = $scope.rooms[0]
	$scope.activeIndex = 0
	

	$scope.needToEnterName = true;
	$scope.enter = function() {
		$scope.needToEnterName = false
	}

	$scope.greeting = 'enter into my world'
	$scope.moveUpDown = 0;
	$scope.moveLeftRight = 0;
	$scope.activeMonster = []
	$scope.handleKeydown = function(event){
		//down
		if ( event.which === 40 && $scope.moveUpDown <= 200	) {
		    $scope.moveUpDown += 55;
		    $scope.activeIndex += 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}
		}

		//up
		if ( event.which === 38 && $scope.moveUpDown > 0) {
		  	$scope.moveUpDown -= 55;
		  	$scope.activeIndex -= 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		
		//left
		if (event.which === 37 && $scope.moveLeftRight > 0 ) {
		   	$scope.moveLeftRight -= 50
		   	$scope.activeIndex -= 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		//right
		if (event.which === 39 && $scope.moveLeftRight <= 200) {
		   	$scope.moveLeftRight += 50;
		   	$scope.activeIndex += 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}


		}
	}
	$scope.attack = function(monster) {
		$scope.player.attack(monster)
		if (this.monster.hp <= 0) {
			$scope.dead = true;
			this.monster.dead = true
			console.log(monster.name + ' is dead.')
		}
		if ($scope.player.hp <= 0) {
			alert('YOU ARE DEAD')
			window.location.reload();
		}
	}


	$scope.run = function() {
		console.log('u ran like a little bitch boy')
	}
	$scope.dead = false;
	$scope.loot = function(monster) {
		$scope.player.items.push(monster.items.pop())
		$scope.activeMonster.pop()
		$scope.dead = false
	}


}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])