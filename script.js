let num = prompt("Enter number here");
console.log(`number : ${num}`);

if (num > 1000000 || num < 0) {
    alert(` invalid number , Number must range 0 to 1000000`);
} else {
    document.write(`Sum of entered number is : ${addNum(num)}`);
}

function addNum(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
        console.log({sum})

    }
    return sum;
}