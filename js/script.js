const squareGrid = document.querySelector(".square-grid");

const goButton = document.getElementById("start");

const difficulty = document.getElementById("difficulty");


goButton.addEventListener("click", function() {

    squareGrid.innerHTML = "";
    if(difficulty.value === "difficulty1") {

        makeGrid(squareGrid, 10);

    } else if(difficulty.value === "difficulty2") {

        makeGrid(squareGrid, 9);

    } else if(difficulty.value === "difficulty3") {

        makeGrid(squareGrid, 7);

    }

    console.log(difficulty.value);

});






function makeGrid (HTMLElement, squaresNumber) {

    squaresIterations = squaresNumber * squaresNumber;

    for (let i = 1; i<=squaresIterations; i++) {

        const square = document.createElement("div");
        square.innerHTML = i;
        squareDynamicClass = "square"+squaresNumber.toString();
        square.classList.add("square", squareDynamicClass, "flex-row-center-center");
        
    
        square.addEventListener("click", function() {
    
            this.classList.add("bg-azure");
            
    
        });
    
        HTMLElement.append(square);

    }
}

