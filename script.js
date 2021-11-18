// declare global variables

let slider;
let principal;
let output;
let years;
let rate;
let error;

function calculate(principal, rate, years) {
  console.log((rate / 100) ** 5);
  return principal * years * (rate / 100);
}
function compute() {
  var output = document.getElementById('result');

  error.innerHTML = '';

  principal = Number(document.getElementById('principal').value);
  if (principal <= 0 || principal === '') {
    error.innerHTML = 'Please enter a valid amount';
    alert('Please enter a valid amount');
    document.getElementById('principal').focus();
    return;
  }
  years = Number(document.getElementById('years').value);

  // get the number of years and validate on errors
  years = document.getElementById('years').value;
  if (years <= 0 || years === '') {
    alert('Please enter a valid number of years');
    error.innerHTML = 'Please enter a valid number of years';
    document.getElementById('years').focus();
    return;
  }
  console.log(rate);
  rate = Number(rate);

  const result = calculate(principal, rate, years);

  const date = new Date();
  const later = Number(date.getFullYear()) + Number(years);

  output.innerHTML = `If you deposit <span class="highlight">${principal}</span><br>
  at an interest rate of <span class="highlight">${rate}%</span><br>
  You will receive an amount of <span class="highlight">${result.toFixed(
    2
  )}</span>, <br>
  in the year <span class="highlight">${later}</span>`;
}

slider = document.getElementById('rateRange');
rate = slider.value;
error = document.getElementById('error');
liveValue.innerHTML = slider.value + '%';

slider.oninput = function () {
  let liveValue = document.getElementById('liveValue');
  liveValue.innerHTML = this.value + '%';
  rate = this.value;
};
