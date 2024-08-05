// JavaScript to dynamically generate squares and color buttons
const colors = ["blue", "purple", "pink", "orange", "green", "red"];
const numberOfSquares = 12;

function createColorButtons(squareIndex) {
    return colors.map(color => {
        return `<img class="color ${color}${squareIndex}" src="Img/${color}.png" alt="${color}">`;
    }).join('');
}

function createSquares() {
    const squaresContainer = document.getElementById('squares-container');
    for (let i = 1; i <= numberOfSquares; i++) {
        const squareHTML = `
            <div class="square sq${i}">
                <div class="color-bt">
                    ${createColorButtons(i)}
                </div>
            </div>
        `;
        squaresContainer.innerHTML += squareHTML;
    }
}

// Call function to generate squares and color buttons
createSquares();

// Function to set the color of a square
function setColor(square, color) {
    square.style.backgroundImage = `url(Img/${color}.png)`;
}

// Function to reset all squares to black
function resetAll() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundImage = `url(Img/black.png)`;
    });
}

// Function to handle color button clicks
function handleColorButtonClick(event) {
    const colorClass = event.target.classList[1];
    const color = colorClass.replace(/\d+$/, '');
    const index = parseInt(colorClass.match(/\d+$/)[0], 10);
    const square = document.querySelector(`.sq${index}`);
    setColor(square, color);
}

// Add event listeners to color buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        handleColorButtonClick(event);
    }
});

// Add event listener to the reset button
document.querySelector('.bt-div').addEventListener('click', resetAll);
