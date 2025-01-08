const battleboardOptions = document.getElementById("battleboard");
const options = document.getElementById("ships");
const rotateButton = document.getElementById("rotate-button");

// Rotation button function
let angle = 0;
function rotate() {
    const battleshipOptions = Array.from(options.children);
    if (angle === 0) {
        angle = 90
    } else {
        angle = 0
    };
    battleshipOptions.forEach(battleshipOption => battleshipOption.style.transform = `rotate(${angle}deg)`);
};

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
        battleboardOption.append(block)
    };

    battleboardOptions.append(battleboardOption);
};

createBattleboard("blue", "player")
createBattleboard("navy", "computer")

// Ship creation function

class ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    };
};

const destroyer = new ship("Destroyer", 4);
const submarine = new ship("Submarine", 3);
const carrier = new ship("Carrier", 5);
const minehunter = new ship("Minehunter", 2);
const frigate = new ship("Frigate", 3);

const ships = [destroyer, submarine, carrier, minehunter, frigate];

function addShip(ship) {
    const allShipBlocks = document.querySelectorAll("computer div");
    let randomBoolean = math.random() < 0.5;
    let isHorizontal = randomBoolean;
    let randomStart = Math.floor(Math.random() * width * width);

    let shipBlocks = [];

    for (let i = 0; i < ship.length; i++) {
        if (isHorizontal) {
            shipBlocks.push(allShipBlocks[Number(randomStart) + i]);
        } else {
            shipBlocks.push(allShipBlocks[Number(randomStart) = i * width]);
        };
    };
};

shipBlocks.forEach(shipBlock => {
    shipBlock.classList.add(ship.name);
    shipBlock.classList.add("taken");
});


addShip(ships);