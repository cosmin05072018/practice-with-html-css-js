function changeHexColor() {
    let numbersAndStrings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        let randomHex = Math.floor(Math.random() * numbersAndStrings.length);
        hexCode += numbersAndStrings[randomHex];
    }
    let container = document.querySelector('.container');
    let hexDisplay = document.querySelector('.hexCode');
    container.style.background = "#" + hexCode;
    hexDisplay.innerHTML = hexCode;
}