let numberOfDiceSelected = 0
let typeOfDiceSelected = ''
const numberSelectedEl = document.getElementById('selectedNumber')
const typeSelectedEl = document.getElementById('selectedType')

const stats = {
    d4: { timesRolled: 0 },
    d6: { timesRolled: 0 },
    d8: { timesRolled: 0 },
    d10: { timesRolled: 0 },
    d12: { timesRolled: 0 },
    d20: { timesRolled: 0 },
    d100: { timesRolled: 0 }
}

const handleNumberSelect = function (event) {
    if (event.target.matches('li')) {
        numberOfDiceSelected = parseInt(event.target.textContent)
        numberSelectedEl.innerHTML = numberOfDiceSelected
    }

}
document.querySelector('#numberOfDice').addEventListener('click', handleNumberSelect)

const handleTypeSelect = function (event) {
    if (event.target.matches('li')) {
        typeOfDiceSelected = event.target.textContent
        typeSelectedEl.innerHTML = typeOfDiceSelected
    }

}
document.querySelector('#typeOfDice').addEventListener('click', handleTypeSelect)

const generateSides = function (diceNumber) {
    const possibleSides = []
    for (let i = 1; i <= diceNumber; i++) {
        possibleSides.push(i)
    }
    return possibleSides
}

const handleRoll = function () {
    let sides = 0

    switch (typeOfDiceSelected) {
        case "d4": {
            sides = generateSides(4);
            break;
        }
        case "d6": {
            sides = generateSides(6);
            break;
        }
        case "d8": {
            sides = generateSides(8);
            break;
        }
        case "d10": {
            sides = generateSides(10);
            break;
        }
        case "d12": {
            sides = generateSides(12);
            break;
        }
        case "d20": {
            sides = generateSides(20);
            break;
        }
        case "d100": {
            sides = generateSides(100);
            break;
        }

        default: return

    }

    rollDice(numberOfDiceSelected, sides, typeOfDiceSelected)


}

document.querySelector('#rollButton').addEventListener('click', handleRoll)

const rollDice = function (number, sides, type) {

    let timesRolled = 0



    while (timesRolled < number) {
        let sideSelected = Math.floor(Math.random() * sides.length)
        console.log(sideSelected)
        timesRolled++

    }
    const currentStats = JSON.parse(localStorage.getItem('stats')) || stats
    currentStats[type].timesRolled += timesRolled
    localStorage.setItem('stats', JSON.stringify(currentStats))


}

const readLocalStorage = function () {
    const currentStats = JSON.parse(localStorage.getItem('stats')) || stats

    d4El.innerHTML = currentStats.d4.timesRolled
    d6El.innerHTML = currentStats.d6.timesRolled
    d8El.innerHTML = currentStats.d8.timesRolled
    d10El.innerHTML = currentStats.d10.timesRolled
    d12El.innerHTML = currentStats.d12.timesRolled
    d20El.innerHTML = currentStats.d20.timesRolled
    d100El.innerHTML = currentStats.d100.timesRolled

}







