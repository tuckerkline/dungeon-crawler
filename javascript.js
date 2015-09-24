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
	new Room(),
	new Room(medusa),
	new Room(worstEnemy),
	new Room(cyclops),
	new Room(basilisk),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	new Room(),
	]
	


	$scope.	rooms[0].active = true
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
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}
		}

		//up
		if ( event.which === 38 && $scope.moveUpDown > 0) {
		  	$scope.moveUpDown -= 55;
		  	$scope.activeIndex -= 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		
		//left
		if (event.which === 37 && $scope.moveLeftRight > 0 ) {
		   	$scope.moveLeftRight -= 50
		   	$scope.activeIndex -= 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		//right
		if (event.which === 39 && $scope.moveLeftRight <= 200) {
		   	$scope.moveLeftRight += 50;
		   	$scope.activeIndex += 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}


		}
	}

	// var monsterChecker = function() {
	// 	if ($scope.activeRoom.monster != undefined  && $scope.activeRoom.monster.dead === false) {
	// 		$scope.activeMonster.push($scope.activeRoom.monster) 
	// 	}
	// }




	$scope.attack = function(monster) {
		$scope.player.attack(monster)
		if (this.monster.hp <= 0) {
			$scope.dead = true;
			this.monster.dead = true
			console.log(monster.name + ' is dead.')
			console.log($scope.activeRoom.monster)
		}
		if ($scope.player.hp <= 0) {
			alert('YOU ARE DEAD')
			window.location.reload();
		}
	}

	$scope.run = function() {
		$scope.activeIndex = 0
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