let form = document.getElementById('ftag');
let tonne = document.getElementById('tonne');
let kilograms = document.getElementById('kilograms')
let stone = document.getElementById('stone');
let ounce = document.getElementById('ounce');
let error = document.getElementById('error');


// var convertType
let output = document.getElementById('output');


function ton(){
    convertType = 'tonne'
    error.innerHTML="Input the number of tonne"
}
function kil(){
    convertType = 'kilograms'
    error.innerHTML="Input the number of kilogram"
}
function sto(){
    convertType = 'stone'
    error.innerHTML="Input the number of stone"
}
function oun(){
    convertType = 'ounce'
    error.innerHTML="Input the number of ounce"
}


// form submit
form.onsubmit = function(event){
    event.preventDefault();
    var number = document.getElementById('text').value;

if (number){
    if (convertType == 'tonne'){
        var result = (number * 1000);
        output.innerHTML = number + '' + 'tonne' + '=' + result + 'kilograms';
        // output.innerHTML = '${number} tonne = ${result} kilograms';
    }
    else if (convertType == 'kilograms'){
        var result = (number * 0.001);
        output.innerHTML = `${number} kilograms = ${result} tonne`;
    }
    else if (convertType == 'stone'){
        var result = (number * 224);
        output.innerHTML = `${number} stone = ${result} ounce`;
    }
    else if (convertType == 'ounce'){
        var result = (number * 0.0446).toFixed(2);
        output.innerHTML = number + '' + 'ounce' + '=' + result + 'stone';
    }
    else {
        output.innerHTML = 'Value is needed';
    }
}
} 