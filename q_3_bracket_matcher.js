/**
 * 
 * 
 * @param {any} text 
 * @returns 
 */
function bracketMatcher(text) {
    let bracketCount = 0;

    //convert text to array
    text.split("").forEach(char => {
        if (char == "(") {
            bracketCount++;
        } else if (char == ")") {
            bracketCount--;
        }
    });

    return bracketCount === 0 ? 1 : 0;
}

console.log(bracketMatcher("(())"));
