const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", '"'];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialsCheckbox = document.querySelector(".special-checkbox");
const numbersCheckbox = document.querySelector(".number-checkbox");
const spacesCheckbox = document.querySelector(".space-checkbox");
const upperCaseCheckbox = document.querySelector(".uppercase-checkbox");
const generateButton = document.querySelector(".generate-button");
const text = document.querySelector(".password-text");
const slider = document.querySelector(".length-slider");
const sliderText = document.querySelector(".max-length");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function generate(characters) {
  length = slider.value;
  password = "";
  for (let i = 0; i < length; i++) {
    password += characters[getRandomInt(0, characters.length)];
  }
  text.innerText = password;
}
function getChars() {
  let chars = [...alphabet];
  if (specialsCheckbox.checked == true) {
    for (let i = 0; i < specials.length; i++) {
      chars.push(specials[i]);
    }
  }
  if (numbersCheckbox.checked) {
    for (let i = 0; i < numbers.length; i++) {
      chars.push(numbers[i]);
    }
  }
  if (upperCaseCheckbox.checked) {
    for (let i = 0; i < upperCase.length; i++) {
      chars.push(upperCase[i]);
    }
  }
  if (spacesCheckbox.checked) {
    chars.push(" ");
    chars.push(" ");
    chars.push(" ");
  }

  return chars;
}
function init() {
  generateButton.addEventListener("click", () => {
    generate(getChars());
  });
  slider.addEventListener("input", () => {
    sliderText.innerText = `Length ${slider.value} `;
    generate(getChars());
  });
  spacesCheckbox.addEventListener("change", () => {
    generate(getChars());
  });
  numbersCheckbox.addEventListener("change", () => {
    generate(getChars());
  });
  upperCaseCheckbox.addEventListener("change", () => {
    generate(getChars());
  });
  specialsCheckbox.addEventListener("change", () => {
    generate(getChars());
  });
}

init();
generate(getChars());
