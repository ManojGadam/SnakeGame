import { onSnake,expandSnake } from "./snake.js"
import { getRandomGrid } from "./grid.js"
let food = getRandomFoodPosition()
let expansionRate = 1

export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newPosition = null
    while(newPosition == null || onSnake(newPosition)){
        newPosition = getRandomGrid()
    }
    return newPosition
}