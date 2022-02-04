// First, tell us your name
let yourName = "John Roub"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let total = 0; // total

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");
const gbValue = document.querySelector("#qty-gb");

const Value = document.querySelector("#qty-total");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb = gb + 1;
  total = total + 1;
  gbValue.innerHTML = gb;
  Value.innerHTML = total;
});
gbMinusBtn.addEventListener("click", function () {
  gb = gb - 1;
  total = total - 1;
  gbValue.innerHTML = gb;
  Value.innerHTML = total;
});
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

//Choclate chip
const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");
const ccValue = document.querySelector("#qty-cc");

ccPlusBtn.addEventListener("click", function () {
  cc = cc + 1;
  total = total + 1;
  ccValue.innerHTML = cc;
  Value.innerHTML = total;
});
ccMinusBtn.addEventListener("click", function () {
  cc = cc - 1;
  total = total - 1;
  ccValue.innerHTML = cc;
  Value.innerHTML = total;
});

// Sugar button
const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");
const sugarValue = document.querySelector("#qty-sugar");

sugarPlusBtn.addEventListener("click", function () {
  sugar = sugar + 1;
  total = total + 1;
  sugarValue.innerHTML = sugar;
  Value.innerHTML = total;
});
sugarMinusBtn.addEventListener("click", function () {
  sugar = sugar - 1;
  total = total - 1;
  sugarValue.innerHTML = sugar;
  Value.innerHTML = total;
});
