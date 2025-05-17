let currentvalue = "";
document.getElementById("Input").value = currentvalue;

function clearfunction() {
  // Remove the last character from the current value
  currentvalue = currentvalue.slice(0, -1);
  // Update the input field with the new value
  document.getElementById("Input").value = currentvalue;
}
