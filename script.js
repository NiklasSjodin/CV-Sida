let pressedKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  pressedKeys += e.key;

  // Check if the end of the pressedKeys string matches "1337"
  if (pressedKeys.endsWith(1337)) {
    alert("ELIT MANNEN!!!");
    // Optionally, reset pressedKeys after a successful match
    pressedKeys = "";
  }

  console.log(pressedKeys);
});

let pKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  pKeys += e.key;

  // Check if the end of the pressedKeys string matches "aldor"
  if (pKeys.endsWith("aldor")) {
    alert("Kingen över alla!");
    // Optionally, reset pressedKeys after a successful match
    pKeys = "";
  }

  console.log(pKeys);
});

let prKeys = "";

window.addEventListener("keyup", (e) => {
  // Append the pressed key to the pressedKeys string
  prKeys += e.key;

  // Check if the end of the pressedKeys string matches "fady"
  if (prKeys.endsWith("arnar")) {
    alert("Den isländska konungen!");
    // Optionally, reset pressedKeys after a successful match
    pKeys = "";
  }

  console.log(prKeys);
});
