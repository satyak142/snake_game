const LINE_PIXEL_COUNT = 40 ;
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2 ;

let totalFoodEaten = 0 ;
let totalDistanceTravelled = 0 ;

const gameboard = document.querySelector('#gameboard');

const createGameBoardPixels = () => {
    for(let i = 0 ; i < TOTAL_PIXEL_COUNT ; i++){
        console.log('111')
        gameboard.innerHTML = `${gameboard.innerHTML} <div class="gameboardPixel" id="pixel${i}"></div>`
    }
}

