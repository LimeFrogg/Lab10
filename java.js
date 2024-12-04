function greetUser(Isabella) {
    document.getElementById('output').innerText = `Hello, ${Isabella}!`;
}

document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Hello, World!';
});
