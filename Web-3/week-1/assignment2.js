
/*
What if I ask you that the input string should start with 100xdevs ? How would the code change?

sample input and output

Input: 100xdevs2274885
Output Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

*/

const crypto = require('crypto');
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = '100xdevs' + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);