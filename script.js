const submit = document.getElementById('wthForm')
var inputEl = document.querySelector("#inputDefault")
var rainEl = document.querySelector('#inputRain')
var tempEl = document.querySelector('#temparatureEl')
var umbrellaEl = document.querySelector('#umbrellaEl')
var jacketEl = document.querySelector('#jacketEl')
var checkBox = document.querySelector('#isItC')
const cToF = celsius => celsius * 9/5 + 32;
const fToC = fahrenheit => (fahrenheit - 32) * 5/9;
const celcius = fToC(inputEl.value);


var getTemp = function(){
if (inputEl.value < 70) {
    jacketEl.innerHTML = 'Wear a jacket!'
} else {
    jacketEl.innerHTML = 'No jacket needed!'
}
}

var getRain = function(){
    if (rainEl.value.toLowerCase() == 'yes') {
        umbrellaEl.innerHTML = 'Bring an umbrella'
    }
    else {
        umbrellaEl.innerHTML = 'No umbrella needed!'
    }
    }

    var convertTemp = function(){
        const farenheit = cToF(inputEl.value);
        const celcius = fToC(inputEl.value);
        if (checkBox.checked == true) {
        tempEl.innerHTML = farenheit;
        } else {
            tempEl.innerHTML = celcius
        }
    }


var handleSubmission = function (event) {
    event.preventDefault()
    getTemp()
    getRain()
    convertTemp();
    
}
submit.addEventListener('submit', handleSubmission)

