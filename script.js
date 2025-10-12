const display = document.getElementById("display");
const error = document.getElementById("error");

function appendValue(value) {
  error.textContent = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  error.textContent = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value === "") {
      error.textContent = "Masukkan angka terlebih dahulu";
      return;
    }

    if (display.value.includes("/0")) {
      error.textContent = "Error";
      return;
    }

    const result = eval(display.value);
    display.value = result;
    error.textContent = "";
  } catch {
    error.textContent = "Input Invalid";
  }
}
