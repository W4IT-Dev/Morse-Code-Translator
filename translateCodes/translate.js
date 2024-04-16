function translateMorseCode(type, valueString) {
    valueString = valueString.replace(/\n/g, ' ')
    if (type === "morse") {
        let morseCodesArray = valueString.split(' ').filter((e) => e !== '')
        outputTextarea.value = ""
        console.log(morseCodesArray)
        for (let i = 0; i < morseCodesArray.length; i++) {
            const element = morseCodesArray[i];
            outputTextarea.value += getCharacter(element).toLowerCase();
        }
    }
    if (type === "text") {
        outputTextarea.value = ""
        for (let i = 0; i < valueString.length; i++) {
            const element = valueString[i].toUpperCase();
            outputTextarea.value += getMorseCode(element.toUpperCase()) + " "
        }
    }
}

function getMorseCode(character) {
    // console.log(character)
    return codes[character]
}
function getCharacter(morseCode) {
    console.log(morseCode)
    for (var key in codes) {
        if (codes[key] === morseCode) {
            return key;
        }
    }
    return "<UC>"
}