// Select the button and input fields and adds an event listener for the button
let convert = document.querySelector('[data-convert]').addEventListener('click', function() {

    let inputR = document.querySelector('[data-red]');
    let inputG = document.querySelector('[data-green]');
    let inputB = document.querySelector('[data-blue]');
    let hexOutput = document.querySelector('[data-hex]');

// Function to convert rgb to hex
function rgbToHex(red, green, blue) {
    // Convert the RGB values to hexadecimal and put them together
    let hexaCode = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    return hexaCode;
}
    //what will happen is that this function will get user entered RGB values 
    let red = parseInt(inputR.value);
    let green = parseInt(inputG.value);
    let blue = parseInt(inputB.value);

    //convert the RGB to HEXEDECIMAL
    let hexaCode = rgbToHex(red, green, blue);

    // displays the code.
    hexOutput.textContent = hexaCode;
});