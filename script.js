const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthSection = document.getElementById("length-section");
const volumeSection = document.getElementById("volume-section");
const massSection = document.getElementById("mass-section");

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, "");
}); // only allows numbers

convertBtn.addEventListener("click", function () {
  const unitValue = Number(inputEl.value).toFixed(2);
  if (!unitValue) return;
  const lengthMeter = (unitValue * 0.305).toFixed(2);
  const lengthFeet = (unitValue * 3.281).toFixed(2);
  const volumeLiter = (unitValue * 3.785).toFixed(2);
  const volumeGallon = (unitValue * 0.264).toFixed(2);
  const massKg = (unitValue * 0.454).toFixed(2);
  const massPounds = (unitValue * 2.204).toFixed(2);

  lengthSection.innerHTML = `
    <h2>Length (Meter/Feet)</h2>
    <p> ${unitValue} meters = ${lengthFeet} feet | ${unitValue} feet = ${lengthMeter} meters </p>
    `;
  volumeSection.innerHTML = `
    <h2>Volume (Liters/Gallons)</h2>
    <p> ${unitValue} liters = ${volumeGallon} gallons | ${unitValue} gallons = ${volumeLiter} liters </p>
    `;
  massSection.innerHTML = `
    <h2>Mass (Kilogreams/Pounds)</h2>
    <p> ${unitValue} kilos = ${massPounds} pounds | ${unitValue} pounds = ${massKg} kilos </p>
    `;
});
