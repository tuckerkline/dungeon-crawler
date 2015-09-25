var app = angular.module('myApp', [])
var mainControllerFunc = function($scope) {
	

	var Player = function(items, gold, hp, attackpower, potions, defense) {
		this.items = items
		this.gold = gold
		this.hp = hp
		this.attackpower = attackpower
		this.dead = false
		this.potions = potions
		this.defense = defense
	}

	Player.prototype.attack = function(monster) {
		if (monster.dead != true) {
			monster.hp -= this.attackpower;
			this.hp -= monster.attackpower - this.defense
			console.log(monster.hp)
		}

	}

	$scope.player = new Player(["sword", "wool hat", "grappling hook"], 1000, 20, 10, 4, 0)

	var Monster = function(name, hp, items, gold, attackpower) {
		this.name  = name;
		this.hp    = hp;
		this.items = items;
		this.gold = gold;
		this.attackpower = attackpower;
		this.dead = false
	}

	

	var monstersArray = [
	new Monster('Medusa', 10, ['stone rod'], 1, 4),
	new Monster('Cyclops', 20, ['goopy eye'], 1, 2),
	new Monster('Basilisk', 24, ['diary'], 5, 4),
	new Monster('GIANT!', 50, ['clubbing pants'], 0, 10),
	new Monster('Hydra', 20, ['one of three heads'], 25, 8),
	new Monster('BOSS MONSTER', 100, ['game winning item'], 1000000, 22),
	new Monster('Troll', 30, ['booger wand'], 30, 9),
	new Monster('Orc', 15, ['ugly mask'], 75, 9),
	new Monster('Pokemon', 1, ['tall grass'], 15, 0),
	new Monster('Wolf', 19, ['tooth'], 0, 6),
	new Monster('Chimera', 35, ['camera'], 60, 18),
	// new Monster(),
	// new Monster(),
	// new Monster(),
	// new Monster(),
	]


	var Room = function(active) {
		this.createMonster = function() {
			var randomNumber = Math.floor(Math.random() * 16)
			var selectedMonster = []
			selectedMonster.push(monstersArray[randomNumber])
			monstersArray.splice(randomNumber, 1)
			return selectedMonster[0]
		}
		this.active = false
		this.monster = this.createMonster()
	}

	// console.log()


	$scope.rooms = [
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
			$scope.activeMonster = []
		    $scope.moveUpDown += 55;
		    $scope.activeIndex += 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false ) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}
		}

		//up
		if ( event.which === 38 && $scope.moveUpDown > 0) {
			$scope.activeMonster = []
		  	$scope.moveUpDown -= 55;
		  	$scope.activeIndex -= 6
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false ) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		
		//left
		if (event.which === 37 && $scope.moveLeftRight > 0 ) {
			$scope.activeMonster = []
		   	$scope.moveLeftRight -= 50
		   	$scope.activeIndex -= 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false ) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}

		}
		//right
		if (event.which === 39 && $scope.moveLeftRight <= 200) {
			$scope.activeMonster = []
		   	$scope.moveLeftRight += 50;
		   	$scope.activeIndex += 1
		   	$scope.activeRoom = $scope.rooms[$scope.activeIndex]
		   	if ($scope.activeRoom.monster != undefined && $scope.activeRoom.monster.dead === false ) {
				$scope.activeMonster.push($scope.activeRoom.monster) 
			}


		}
	}

	// var monsterChecker = function() {
	// 	if ($scope.activeRoom.monster != undefined  && $scope.activeRoom.monster.dead === false) {
	// 		$scope.activeMonster.push($scope.activeRoom.monster) 
	// 	}
	// }


	$scope.drink = function() {
		if ($scope.player.potions > 0) {
			$scope.player.potions--
			$scope.player.hp = $scope.player.hp + 15
		}
	}

	$scope.attack = function(monster) {
		$scope.player.attack(monster)
		if (this.monster.hp <= 0) {
			$scope.dead = true;
			this.monster.dead = true
		}
		if ($scope.player.hp <= 0) {
			alert('YOU ARE DEAD')
			window.location.reload();
		}
	}

	$scope.run = function() {
		$scope.activeIndex = 0
		console.log('u ran like a little bitch boy')
		$scope.activeMonster = []
	}
	$scope.dead = false;
	$scope.loot = function(monster) {
		$scope.player.items.push(monster.items.pop())
		$scope.player.gold += monster.gold
		$scope.activeMonster.pop()
		$scope.dead = false
		gameWinChecker()
	}
	//shop
	$scope.buyPotion = function() {
		if ($scope.player.gold >= 2) {
			$scope.player.potions++
			$scope.player.gold = $scope.player.gold - 2
		}
	}
	$scope.buyBlessing = function() {
		if ($scope.player.gold >= 5) {
			$scope.player.attackpower += 2
			$scope.player.gold -= 5
		}
	}
	$scope.buyTrinket = function() {
		if ($scope.player.gold >= 100) {
			$scope.player.items.push("useless trinket")
			$scope.player.gold -= 100
		}
	}
	$scope.buyCrotchguard = function() {
		if ($scope.player.gold >= 9) {
			$scope.player.defense += 2
			$scope.player.gold -= 9
		}
	}
	var gameWinChecker = function() {
		for (var i = 0; i < $scope.player.items.length; i++) {
			console.log($scope.player.items[i])
			if ($scope.player.items[i] === 'game winning item') {
				alert('you win the game')
				window.location.reload();
			}
		}
	}


}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])