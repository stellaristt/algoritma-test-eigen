const reverseString = (str) => {
    const letters = str.match(/[A-Z]/g) || [];
    const numbers = str.match(/\d/g) || [];
    
    const reversedLetters = letters.reverse().join('');

    return `${reversedLetters}${numbers.join('')}`;
};

const result = reverseString("NEGIE1");
console.log(result);
