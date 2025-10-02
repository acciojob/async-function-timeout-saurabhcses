// script.js

// Function to return a promise that resolves after "ms" milliseconds
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function
async function showMessage() {
  const textValue = document.getElementById("text").value;
  const delayValue = document.getElementById("delay").value;
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "";
  await delay(Number(delayValue));
  outputDiv.textContent = textValue;
}
document.getElementById("btn").addEventListener("click", showMessage);
