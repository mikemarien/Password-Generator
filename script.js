function generate() {
  let password = "";
  let length = document.getElementById("length").value;
  let lowerCase = document.getElementById("lowercase").checked;
  let upperCase = document.getElementById("uppercase").checked;
  let symbol = document.getElementById("symbols").checked;
  let number = document.getElementById("numbers").checked;

  if (lowerCase + upperCase + symbol + number <= 0)
      return;

  for (let i = 0; i < length; i++) {

      const r = generator(0, 3);
      if (lowerCase && r === 0) {
          password += randomLowerCase();
      } else if (upperCase && r === 1) {
          password += randomRandomUpperCase();
      } else if (symbol && r === 2) {
          password += randomRandomSymbol();
      } else if (number && r === 3) {
          password += generator(0, 9);
      } else {
          i--;
      }

  }

  document.getElementById("result").textContent = password;

}
