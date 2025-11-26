//  1) Somar valores

const nums = [2, 3, 5];

const valor = nums.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(valor);

// conlcuido