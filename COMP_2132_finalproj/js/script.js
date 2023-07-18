
    const hangmanWords = [
        {word: 'mario', role: 'Protagonist', mariokartracer: 'yes'},
        //'Mario',
        {word: 'luigi', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Luigi',
        {word: 'peach', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Peach',
        {word: 'daisy', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Daisy',
        {word: 'yoshi', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Yoshi',
        {word: 'toad', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Toad',
        {word: 'donkeykong', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Donkey Kong',
        {word: 'bowser', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Bowser',
        {word: 'bowserjr', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Bowser Jr',
        {word: 'diddykong', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Diddy Kong',
        {word: 'kamek', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Kamek',
        {word: 'rosalina', role: 'Protagonist', mariokartracer: 'yes'},
        // 'Rosalina',
        {word: 'kingboo', role: 'Antagonist', mariokartracer: 'yes'},
        // 'King Boo',
        {word: 'wario', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Wario',
        {word: 'waluigi', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Waluigi',
        {word: 'koopatroopa', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Koopa Troopa',
        {word: 'peteypiranha', role: 'Antagonist', mariokartracer: 'yes'},
        // 'Petey Piranha',
        {word: 'piranhaplant', role: 'Antagonist', mariokartracer: 'no'},
        // 'Piranha Plant',
        {word: 'goomba', role: 'Antagonist', mariokartracer: 'no'}
        // 'Goomba'
    ];
    
    let hangmanSelectedWord; 
    let answerArray;
    let wrongGuessesValue; 
    let timeOut;
    let timeOutClear;
    const guessPopup = document.getElementById('letter');
    const closePopup = document.getElementById('close-popup');
    document.getElementById('letter-guess').addEventListener('click', letterInput);
    
    function gameStart() {
        hangmanSelectedWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
        answerArray = [];
        wrongGuessesValue = 0;
        showWord();
        document.querySelector('.letter').disabled = false;
        resetHangman();
    }
    
    function showWord() {
        let hangmanShowWord = '';
        for (let i = 0; i < hangmanSelectedWord.word.length; i++) {
        if (answerArray.includes(hangmanSelectedWord.word[i])) {
            hangmanShowWord += hangmanSelectedWord.word[i];
        } else {
            hangmanShowWord += '_ ';
        }
        }
        document.querySelector('.hangman-word').textContent = hangmanShowWord;
    }
    
    
    
    function letterInput() {
        let guessElement = document.querySelector('.letter');
        let letter = guessElement.value.toLowerCase();
        guessElement.value = '';
    
        if (answerArray.includes(letter)) {
        alert('Already guessed that letter bruv');
        return;
        }
        
        answerArray.push(letter);
        
        if (hangmanSelectedWord.word.includes(letter)) {
        showWord();
        } else {
        wrongGuessesValue++;
        hangmanPartAdd();
        if (wrongGuessesValue === 6) {
            alert('L - Answer was: ' + hangmanSelectedWord.word);
            document.querySelector('.letter').disabled = true;
        }
        }
        
        if (!document.querySelector('.word-display').textContent.includes('_')) {
        alert('Dub');
        document.querySelector('.letter').disabled = true;
        }
    }

    guessPopup.addEventListener('mouseover', function(){
        timeOut = setTimeout(addPopup, 2000);
        function addPopup(){
            document.getElementById('popup').style.opacity = "1";
        }
    });

    guessPopup.addEventListener('mouseout', function(){
        clearTimeout(timeOut);
        timeOutClear = setTimeout(removePopup, 500);
        function removePopup(){
            document.getElementById('popup').style.opacity = "0";
        }
    });

    closePopup.addEventListener('click', function(){
        timeOutClear = setTimeout(removePopup, 300);
        function removePopup(){
            document.getElementById('popup').style.opacity = "0";
        }
      });
    
    function hangmanPartAdd() {
        let hangmanImg = document.getElementById('image');
        hangmanImg.src = `images/hangman-image-${wrongGuessesValue}.jpg`;
    }
    
    function resetHangman() {
        let hangmanImg = document.getElementById('image');
        hangmanImg.src = `images/hangman-image-${0}.jpg`;
    }
    
    
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', function(){
        gameStart();
    });
    
    
    
    gameStart();

    // Zachary Or

