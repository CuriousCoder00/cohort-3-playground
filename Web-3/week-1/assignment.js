const crypto = require('crypto');

/***
 * Assignment 1
 *
 * Find an input string that outputs a SHA-256 hash that starts with 00000.
*/

function findHashWithPrefix1(prefix) {
    let input = 0;
    while (true) {
        const hash = crypto.createHash('sha256').update(input.toString()).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input, hash };
        }
        input++;
    }
}


/*
Assignment 2
What if I ask you that the input string should start with 100xdevs ? How would the code change?

sample input and output

Input: 100xdevs2274885
Output Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

*/

function findHashWithPrefix2(prefix) {
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


/*
What if I ask you to find a nonce for the following input - 

sample input and output

Input: harkirat => Raman | Rs 100 Ram => Ankit | Rs 101935085
Output Hash: 00000780594bad6a25d5a240f9a3a399521979f1b320cd13658fe1232bf2d688
*/

function findHashWithPrefix3(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `harkirat => Raman | Rs 100 Ram => Ankit | Rs 101935085` + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash

const assignment = async () => {
    console.log("Running Assignment 1. Please wait...")
    const result1 = findHashWithPrefix1('00000');
    console.log(`Input: ${result1.input}`);
    console.log(`Output Hash: ${result1.hash}`);
    console.log("Assignment 1 completed successfully.\n")
    console.log("Running Assignment 2. Please wait...")
    const result2 = findHashWithPrefix2('00000');
    console.log(`Input: ${result2.input}`);
    console.log(`Hash: ${result2.hash}`);
    console.log("Assignment 2 completed successfully.\n")
    console.log("Running Assignment 3. Please wait...")
    const result3 = findHashWithPrefix3('00000');
    console.log(`Input: ${result3.input}`);
    console.log(`Hash: ${result3.hash}`);
    console.log("Assignment 3 completed successfully.")
}

assignment();