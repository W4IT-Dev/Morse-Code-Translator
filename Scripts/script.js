//  CODES
let codes = {
  " ": "/",
  "'": ".----.",
  "(": "-.--.-",
  ")": "-.--.-",
  ",": "--..--",
  "-": "-....-",
  ".": ".-.-.-",
  "/": "-..-.",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ":": "---...",
  ";": "-.-.-.",
  "?": "..--..",
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "_": "..--.-"
}

function switchInputs() {
  let inputValue = inputTextarea.value
  let outputValue = outputTextarea.value
  let inputType = inputTextarea.dataset.type;
  let inputTranslation = inputTextarea.parentNode.querySelector('label').dataset.translate
  let outputTranslation = outputTextarea.parentNode.querySelector('label').dataset.translate

  inputTextarea.value = outputValue;
  outputTextarea.value = inputValue;
  inputTextarea.parentNode.querySelector('label').dataset.translate = outputTranslation
  outputTextarea.parentNode.querySelector('label').dataset.translate = inputTranslation
  inputTextarea.dataset.type = inputType === "text" ? "morse" : "text"
  updateUIWithTranslations();
  inputTextarea.focus();
}

getKaiAd({
  publisher: 'fe2d9134-74be-48d8-83b9-96f6d803efef',
  app: 'morsecodetranslator',
  test: 1,
  onerror: err => console.error('Custom catch:', err),
  onready: ad => {
    ad.call('display')
  }
})