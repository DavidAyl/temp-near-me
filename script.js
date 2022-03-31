const submit = document.getElementById('wthForm')
var inputEl = document.querySelector("#inputDefault");

var getTemp = function(tempInput){
if (tempInput < 70) {
    console.log('heyman')
}
}

var handleSubmission = function (event) {
    event.preventDefault();
    
}
submit.addEventListener('submit', handleSubmission)

console.log('hello')