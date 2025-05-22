//const input = document.querySelectorAll('#input-sec');
const form = document.getElementById("myForm");

form.addEventListener('submit', function (event) {
event.preventDefault();
//console.log("algazaly");
// const weight = document.getElementById("weight").value;
// const height = document.getElementById("height").value;

// const bmi = value(weight) / value(height **2);
const weight = parseFloat(document.getElementById("weight").value);
const height = parseFloat(document.getElementById("height").value);
//const result = document.getElementById("result");
let result;

if (weight > 0 && height> 0) {
  result = weight / (height * height);  
}
const roundedResult = Math.round(result);

let category = '';

    if (roundedResult < 18.5) {
      category = 'Underweight';
    } else if (roundedResult < 25) {
      category = 'Normal weight';
    } else if (roundedResult < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }







document.getElementById('output-sec').value = `${roundedResult} (${category})`;

//document.getElementById('output-sec').value = result;
//document.getElementById("output-sec").textContent = `Result: ${roundedResult}`;




});