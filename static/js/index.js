const API_BASE = "http://localhost:8000";

const gridContainer = document.getElementById("grid");
let player = { x: 1, y: 2 }; // default starting point
let gridData = [];
const size = 5; // 5x5 grid

// Draw grid from backend map + player position
function drawGrid() {
    gridContainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const mapCell = gridData.find(c => c.x === i && c.y === j);
            const value = mapCell ? mapCell.value : "path";

            if (i === player.x && j === player.y) {
                cell.classList.add("player");
                cell.textContent = "🙂";
            } else if (value === "wall") {
                cell.classList.add("wall");
                cell.textContent = "🧱";
            } else if (value === "trap") {
                cell.classList.add("trap");
                cell.textContent = "💀";
            } else if (i === size - 1 && j === size - 1) {
                cell.classList.add("home");
                cell.textContent = "🏠";
            } else {
                cell.classList.add("path");
            }

            gridContainer.appendChild(cell);
        }
    }
}

// Move player (with backend call)
async function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    // Stay inside bounds
    if (newX < 0 || newX >= size || newY < 0 || newY >= size) return;

    const cell = gridData.find(c => c.x === newX && c.y === newY);
    const cellType = cell ? cell.value : "path";

    // Check walls
    if (cellType === "wall") {
        alert("You hit a wall!");
        return;
    }

    // Update position
    player.x = newX;
    player.y = newY;

    // Notify backend
    await fetch(`${API_BASE}/move`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            position_x: player.x,
            position_y: player.y
        })
    }).then(res => res.json())
      .then(data => console.log("Move:", data));

    // Check trap
    if (cellType === "trap") {
        alert("Game Over! You fell into a trap!");
        restartGame();
        return;
    }

    // Check win
    if (player.x === size - 1 && player.y === size - 1) {
        alert("Congratulations! You reached the goal!");
        restartGame();
        return;
    }

    drawGrid();
}

// Restart game
function restartGame() {
    player = { x: 1, y: 2 };
    drawGrid();
}

// Start new game
document.getElementById("start").onclick = async () => {
    const res = await fetch(`${API_BASE}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player: "rochel" })
    });
    const data = await res.json();
    player.x = data.data.position_x;
    player.y = data.data.position_y;

    // Load map
    const mapRes = await fetch(`${API_BASE}/map`);
    const mapData = await mapRes.json();
    gridData = mapData.data;

    drawGrid();
    alert("Game started!");
};

// Move buttons
document.getElementById("up").onclick = () => movePlayer(-1, 0);
document.getElementById("down").onclick = () => movePlayer(1, 0);
document.getElementById("left").onclick = () => movePlayer(0, -1);
document.getElementById("right").onclick = () => movePlayer(0, 1);
