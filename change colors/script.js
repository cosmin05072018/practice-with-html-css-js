let index = 0;

function changeColors() {
    let colors = ['red', 'green', 'blue', 'yellow', 'cyan'];
    let container = document.querySelector('.container');
    let paragraph = document.querySelector('.color');
    paragraph.innerHTML = `The color is ${colors[index]}`
    container.style.backgroundColor = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
}