document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('userInput').value;
    const words = input.split(' ');
    let vowelsWords = [];
    let consonantsWords = [];
    const vowelsList = 'AEIOUaeiou';

    for (let word of words) {
        if (word.length > 0) {
            if (vowelsList.includes(word[0])) {
                vowelsWords.push(word);
            } else {
                consonantsWords.push(word);
            }
        }
    }

    document.getElementById('vowelsOutput').textContent = vowelsWords.length > 0 ? vowelsWords.join(', ') : 'None';
    document.getElementById('consonantsOutput').textContent = consonantsWords.length > 0 ? consonantsWords.join(', ') : 'None';
});