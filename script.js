const binaries = document.querySelector('.binaries');
const submit = document.querySelector('.submit')
const decimals = document.getElementById('decimals')
const form = document.querySelector('.form')

let inputData, calcInput
let total = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = binaries.value;
    if(value == '') {
        alert('please Insert a number')
    } else {
        test(); //checks if the inserted number is between 0 and 1 and then calls calcTotal()
    }
    resetState() // resets the total back to zero
    
})

function resetState() {
    binaries.value = '';
    total = 0;
}

function test() {
    let regex, string;
    if(binaries.value != '') {
        regex = new RegExp('[0-1]', 'g')
        string = binaries.value
        regex.test(string) ? calcTotal() : alert('Insert a number between 0 and 1')
    } 
}

function calcTotal() { //converts the digits to base 10
    for(let i = 0; i < binaries.value.length; i++) {
        inputData = parseInt(binaries.value[i])
        calcInput = (total * 2) + inputData
        total = calcInput;
    }
    decimals.textContent = total;
}


 