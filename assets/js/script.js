const battleboardOptions = document.getElementById("battleboard");
const options = document.getElementById("ships");
const rotateButton = document.getElementById("rotate-button");

// Rotation button function
let angle = 0;

function rotate() {
	const battleshipOptions = Array.from(options.children);
	angle = angle === 0 ? 90 : 0; // Toggle angle between 0 and 90 degrees
	battleshipOptions.forEach(battleshipOption => battleshipOption.style.transform = `rotate(${angle}deg)`);
}

rotateButton.addEventListener("click", rotate);

// Battleboard creation function
const width = 10;

function createBattleboard(color, user) {
	const battleboardOption = document.createElement("div");
	battleboardOption.classList.add("battleboard");
	battleboardOption.style.backgroundColor = color;
	battleboardOption.id = user;

	for (let i = 0; i < width * width; i++) {
		const block = document.createElement("div");
		block.classList.add("block");
		block.id = i;
		battleboardOption.append(block);
	}

	battleboardOptions.append(battleboardOption);
}

createBattleboard("blue", "player");
createBattleboard("navy", "computer");

// Ship creation function

class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
	}
}

const destroyer = new Ship("Destroyer", 4);
const submarine = new Ship("Submarine", 3);
const carrier = new Ship("Carrier", 5);
const minehunter = new Ship("Minehunter", 2);
const frigate = new Ship("Frigate", 3);

const ships = [destroyer, submarine, carrier, minehunter, frigate];

function addShip(ship) {
	const allBoardBlocks = document.querySelectorAll("computer div");
	let isHorizontal = Math.random() < 0.5;
	let randomStart = Math.floor(Math.random() * width * width);

	// Calculate valid starting position for horizontal placement
	let validStart = isHorizontal ?
		randomStart <= width * width - ship.length ?
		randomStart :
		width * width - ship.length :
		randomStart <= width * width - width * ship.length ?
		randomStart :
		randomStart - ship.length * width + width;

	let shipBlocks = [];
	for (let i = 0; i < ship.length; i++) {
		if (isHorizontal) {
			shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
		} else {
			shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
		}
	}

	// Check for valid placement (both horizontal and vertical)
	let valid = true;
	if (isHorizontal) {
		valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id % width !== ship.length - (index + 1));
	} else {
		valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id + index * width < width * width);
	}

	const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains("taken"));

	if (valid && notTaken) {
		shipBlocks.forEach(shipBlock => {
			shipBlock.classList.add(ship.name);
			shipBlock.classList.add("taken");
		});
	} else {
		// Retry if placement is invalid (consider limiting retries to prevent infinite loops)
		addShip(ship);
	}
}

ships.forEach(ship => addShip(ship));