const treeButton =document.getElementById("tree-button")
const rockButton =document.getElementById("rock-button")
const houseButton =document.getElementById("house-button")

const treeContainer =document.getElementById("tree-container")
const rockContainer =document.getElementById("rock-container")
const houseContainer =document.getElementById("house-container")

const winsElement =document.getElementById("wins")
const lossesElement =document.getElementById("losses")
const totalElement =document.getElementById("total")

//initialize state
//here I am initializing the state
const hidingPlaces =["tree", "rock", "house" ]
let correctGuesses=0
let incorrectGuesses=0
let totalGuesses=0

treeButton.addEventListener('click', () => {
    const hidingSpot=Math.floor(Math.random()*3)
    const answer=hidingPlaces[hidingSpot]
    handleGuess(answer,'tree')
})
rockButton.addEventListener('click', () => {
    const hidingSpot=Math.floor(Math.random()*3)
    const answer=hidingPlaces[hidingSpot]
    handleGuess(answer,'rock')
})
houseButton.addEventListener('click', () => {
    const hidingSpot=Math.floor(Math.random()*3)
    const answer=hidingPlaces[hidingSpot]
    handleGuess(answer,'house')
})
function handleGuess(correctSpot,userGuess){
    //reset the style
    treeContainer.classList.remove('face')
    rockContainer.classList.remove('face')
    houseContainer.classList.remove('face')

    //increment the guesses
    totalGuesses++
    //if the user guesses correctly, increment a correct guess
    if(correctSpot===userGuess){
        correctGuesses++
    }
    else{
        incorrectGuesses++
    }
    //update the DOM to show this change to the user(including the losses not tracked in state)
    totalElement.textContent=totalGuesses
    lossesElement.textContent=incorrectGuesses
    winsElement.textContent=correctGuesses

    //then grab the appropriate container element for the correct guess from the DOM
    //add the face class to the element so that the face shows up
    if(correctSpot==='tree'){
        treeContainer.classList.add('face')
        rockContainer.classList.remove('face')
        houseContainer.classList.remove('face')
    }
    else if(correctSpot==='rock'){
        rockContainer.classList.add('face')
        treeContainer.classList.remove('face')
        houseContainer.classList.remove('face')
    }
    else{
        houseContainer.classList.add('face')
        treeContainer.classList.remove('face')
        rockContainer.classList.remove('face')
    }
}
