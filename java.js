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

var button = document.getElementById('updateTitleBtn');
button.onclick = function() {
    var newTitle = document.getElementById('newTitle').value;
    var title = document.getElementById('title');
    title.innerText = newTitle;
};
var button = document.getElementById('concatenateTextBtn');
button.onclick = function() {
    var str1 = document.getElementById('string1').value;
    var str2 = document.getElementById('string2').value;
    var combinedText = document.getElementById('combinedText');
    combinedText.innerText = str1 + str2;
};
var button = document.getElementById('changeColorBtn');
button.onclick = function() {
    var colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = 'blue';
};

