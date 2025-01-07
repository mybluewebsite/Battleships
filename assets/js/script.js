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

// Battleboard function
const width = 10;

function createBattleboard() {
    const battleboardOption = document.createElement("div");
    battleboardOption.classList.add("battleboard");
    battleboardOption.style.backgroundColor = "lightgreen";
};



rotateButton.addEventListener("click", rotate);