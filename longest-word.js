const longest = (sentence) => {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

const sentence = "Saya sedang mengerjakan soal backend";
const result = longest(sentence);
console.log(`${result}: ${result.length} character`);
