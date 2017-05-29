
/**
 * 
 * Find is number prime or not
 * @param {any} number 
 * @returns 
 */
function isPrime(number) {
    if (!number || !parseInt(number)) {
        throw new Error('invalid number');
    }
    return number % 2 ===0 ? 'true' : 'false';
}

console.log(isPrime(25));
