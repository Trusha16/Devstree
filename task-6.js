let num = 123468924;
let number = num.toString();

function abcd() {
    let newnum = [number[0]];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0 && number[i - 1] % 2 === 0) {
            newnum.push("|", number[i]);
        }
        else {
            newnum.push(number[i]);
        }
    }
    return newnum.join("");
}
console.log(abcd(number));