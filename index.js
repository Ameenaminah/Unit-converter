const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;
const lengthEl = document.getElementById("length-el");
const inputEl = document.getElementById("input-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  let meterToFeet = inputValue * meter;
  let feetToMeter = inputValue / meter;
  lengthEl.textContent = ` ${inputValue} meters = ${meterToFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`;

  let literToGallon = inputValue * liter;
  let gallonToLiter = inputValue / liter;
  volumeEl.textContent = ` ${inputValue} liters = ${literToGallon.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters`;

  let kiloToPound = inputValue * kilo;
  let poundToKilo = inputValue / kilo;
  massEl.textContent = ` ${inputValue} kilos = ${kiloToPound.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)} kilos`;
});
