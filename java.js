function greetUser(Isabella) {
    document.getElementById('output').innerText = `Hello, ${Isabella}!`;
}

document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Hello, World!';
});

document.getElementById('addNumbersBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('5').value);
    let num2 = parseFloat(document.getElementById('6').value);
    let sum = num1 + num2;
    document.getElementById('result').innerText = `The result is: ${sum}`;
});
