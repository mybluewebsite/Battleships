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

rotateButton.addEventListener("click", rotate);