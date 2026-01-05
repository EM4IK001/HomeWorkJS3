// (A) BANANA(S)

let n = Number(prompt("Введите число BANANA(S)"));

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(i + " banana");
  } else {
    console.log(i + " bananas");
  }
}

// (B)Чётные числа

let b = Number(prompt("Введите чётное число"));
let sum = 0;

for (let i = 2; i < b; i += 2) {
  sum += i;
}

console.log("Сумма чётных чисел:", sum);

// (C) Возведение в степень

let number = Number(prompt("Введите число"));
let power = Number(prompt("Введите степень"));

let result = 1;

for (let i = 0; i < power; i++) {
  result *= number;
}

console.log("Результат:", result);
