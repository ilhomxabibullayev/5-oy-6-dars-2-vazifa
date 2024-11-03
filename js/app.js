document.addEventListener("keydown", function (event) {
    const colorBox = document.getElementById("colorBox");

    switch (event.key) {
        case 'q':
            colorBox.style.backgroundColor = 'red';
            break;
        case 's':
            colorBox.style.backgroundColor = 'yellow';
            break;
        case 'd':
            colorBox.style.backgroundColor = 'black';
            break;
        case 'p':
            colorBox.style.backgroundColor = 'pink';
            break;
        case 'k':
            colorBox.style.backgroundColor = 'blue';
            break;
        case 'y':
            colorBox.style.backgroundColor = 'green';
            break;
        default:
            colorBox.style.backgroundColor = 'gray';
            break;
    }
});