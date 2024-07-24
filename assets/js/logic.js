let numberOfDiceSelected = 0
let typeOfDiceSelected = ''
const numberSelectedEl = document.getElementById('selectedNumber')
const typeSelectedEl = document.getElementById('selectedType')

const stats = {
    d4: { timesRolled: 0, results: 0 },
    d6: { timesRolled: 0, results: 0 },
    d8: { timesRolled: 0, results: 0 },
    d10: { timesRolled: 0, results: 0 },
    d12: { timesRolled: 0, results: 0 },
    d20: { timesRolled: 0, results: 0 },
    d100: { timesRolled: 0, results: 0 }
}

const handleNumberSelect = function (event) {
    if (event.target.matches('li')) {
        numberOfDiceSelected = parseInt(event.target.textContent)
        numberSelectedEl.innerHTML = numberOfDiceSelected
    }

}


const handleTypeSelect = function (event) {
    if (event.target.matches('li')) {
        typeOfDiceSelected = event.target.textContent
        typeSelectedEl.innerHTML = typeOfDiceSelected
    }

}


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
    renderSelections(typeOfDiceSelected)


}

const renderSelections = function (type) {
    document.getElementById(`${type}-number`).textContent = numberOfDiceSelected
    readLocalStorage(type)
}



const rollDice = function (number, sides, type) {

    let timesRolled = 0

    const currentStats = JSON.parse(localStorage.getItem('stats')) || stats

    while (timesRolled < number) {
        let sideSelected = Math.floor(Math.random() * sides.length)
        currentStats[type].results += sideSelected
        timesRolled++

    }

    currentStats[type].timesRolled += timesRolled
    localStorage.setItem('stats', JSON.stringify(currentStats))


}

const readLocalStorage = function (type) {
    const currentStats = JSON.parse(localStorage.getItem('stats')) || stats
    document.getElementById(`${type}-rolls`).textContent = currentStats[type].timesRolled


}
const displayAverages = function (type) {
    const currentStats = JSON.parse(localStorage.getItem('stats')) || stats

    console.log(currentStats[type])
}

document.querySelector('#numberOfDice').addEventListener('click', handleNumberSelect)

document.querySelector('#typeOfDice').addEventListener('click', handleTypeSelect)

document.querySelector('#rollButton').addEventListener('click', handleRoll)

document.getElementById('rollTable').addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        const diceRow = event.target.parentElement.parentElement
        const diceType = diceRow.getAttribute('id').split('-')[0]
        displayAverages(diceType)

    }

})







