function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}

const grid = document.querySelector('.container');
const input = document.getElementById('inputNum');
const shake = document.querySelector('.shake');

function createGrid(){
    for(let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

function updateGrid(){
    grid.innerHTML = '';
    grid.style.setProperty(
        'grid-template-columns',
        `repeat(${inputNum.value}, 2fr)`
    );
    grid.style.setProperty(
        'grid-template-rows',
        `repeat(${inputNum.value}, 2fr)`
    );
    for(let i = 0; i < inputNum.value * inputNum.value; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function(e) {
  e.target.classList.replace("square", "color");
});

inputNum.addEventListener("change", updateGrid);

shake.addEventListener('click', function(){
    grid.innerHTML = '';
    inputNum.value = '';
    grid.style.setProperty("grid-template-columns", `repeat(14, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(14, 2fr)`);
    createGrid();
});

createGrid();

