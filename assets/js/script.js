function addNumberToTable(number) {
    var tableBody = document.querySelector('#numbersTable tbody');
    var newRow = tableBody.insertRow();
    var cell = newRow.insertCell();
    cell.textContent = number;
}

var input = prompt('Enter numbers separated by commas:');
var numbers = input.split(',').map(function(item) {
    return parseInt(item.trim(), 10);
});

numbers.forEach(function(number) {
    addNumberToTable(number);
});