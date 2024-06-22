import { levels } from './levels.js';

console.log(levels);

let currentLevelIndex = 0;
let playerPosition;
let boxPositions;
let victoryPositions;
let crossPattern;

const board = document.getElementById('game');
const victoryScreen = document.getElementById('victory-screen');

function loadLevel(levelIndex) {
    const level = levels[levelIndex];
    playerPosition = { ...level.playerPosition };
    boxPositions = level.boxPositions.map(pos => ({ ...pos }));
    victoryPositions = level.victoryPositions.map(pos => ({ ...pos }));
    crossPattern = level.crossPattern;
    render();
}

function render() {
    board.innerHTML = '';
    const numRows = crossPattern.length;
    const numCols = crossPattern[0].length;
    board.style.gridTemplateRows = `repeat(${numRows}, 50px)`;
    board.style.gridTemplateColumns = `repeat(${numCols}, 50px)`;
    
    for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
            if (crossPattern[y][x]) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                if (x === playerPosition.x && y === playerPosition.y) {
                    tile.classList.add('player');
                }
                if (boxPositions.some(pos => pos.x === x && pos.y === y)) {
                    tile.classList.add('box');
                }
                if (victoryPositions.some(pos => pos.x === x && pos.y === y)) {
                    tile.classList.add('victory');
                }
                board.appendChild(tile);
            } else {
                const emptyTile = document.createElement('div');
                emptyTile.style.width = '50px';
                emptyTile.style.height = '50px';
                emptyTile.style.visibility = 'hidden';
                board.appendChild(emptyTile);
            }
        }
    }
}

document.addEventListener('keydown', e => {
    let dx = 0, dy = 0;
    if (e.key === 'ArrowUp') dy = -1;
    if (e.key === 'ArrowDown') dy = 1;
    if (e.key === 'ArrowLeft') dx = -1;
    if (e.key === 'ArrowRight') dx = 1;

    const newPosition = { x: playerPosition.x + dx, y: playerPosition.y + dy };
    if (isValidMove(newPosition)) {
        playerPosition.x += dx;
        playerPosition.y += dy;
        render();
        checkVictory();
    }
});

function isValidMove(newPosition) {
    if (newPosition.x < 0 || newPosition.x >= crossPattern[0].length || newPosition.y < 0 || newPosition.y >= crossPattern.length) {
        return false;
    }
    if (!crossPattern[newPosition.y][newPosition.x]) {
        return false;
    }
    if (boxPositions.some(pos => pos.x === newPosition.x && pos.y === newPosition.y)) {
        const newBoxPosition = { x: newPosition.x + (newPosition.x - playerPosition.x), y: newPosition.y + (newPosition.y - playerPosition.y) };
        if (newBoxPosition.x < 0 || newBoxPosition.x >= crossPattern[0].length || newBoxPosition.y < 0 || newBoxPosition.y >= crossPattern.length || !crossPattern[newBoxPosition.y][newBoxPosition.x]) {
            return false;
        }
        if (boxPositions.some(pos => pos.x === newBoxPosition.x && pos.y === newBoxPosition.y)) {
            return false;
        }
        boxPositions.forEach(pos => {
            if (pos.x === newPosition.x && pos.y === newPosition.y) {
                pos.x = newBoxPosition.x;
                pos.y = newBoxPosition.y;
            }
        });
    }
    return true;
}

function checkVictory() {
    const allBoxesOnVictory = boxPositions.every(box => 
        victoryPositions.some(victory => 
            box.x === victory.x && box.y === victory.y
        )
    );

    if (allBoxesOnVictory) {
        if (currentLevelIndex < levels.length - 1) {
            currentLevelIndex++;
            loadLevel(currentLevelIndex);
        } else {
            victoryScreen.style.display = 'block';
        }
    }
}

loadLevel(currentLevelIndex);
