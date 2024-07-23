import { snakeSpeed,update as snakeUpdate, draw as snakeDraw,getSnakeHead,isIntersected } from "./snake.js"
import { update as foodUpdate, draw as foodDraw } from "./food.js"
import { outSideGrid } from "./grid.js"
let lastRenderTime = 0,gameOver = false
const gameBoard = document.getElementById('gameBody')
function main(currentTime){
    if(gameOver){
        if(confirm('You lost.Press ok to Restart')){
            window.location = "/"
        }
        return
    }
    let secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    window.requestAnimationFrame(main)
    if(secondsSinceLastRender<1/snakeSpeed)return
    lastRenderTime = currentTime
    update()
    render()
    checkGameOver()
}

window.requestAnimationFrame(main)

function update(){
    snakeUpdate()
    foodUpdate()
}

function render(){
    gameBoard.innerHTML = ''
    snakeDraw(gameBoard)
    foodDraw(gameBoard)
}

function checkGameOver(){
    //console.log(outSideGrid(getSnakeHead()),isIntersected())
    gameOver = outSideGrid(getSnakeHead()) || isIntersected()
}