// (A) BANANA(S)

var n = Number(prompt("Введите число BANANA(S)"));

for (var i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(i + " banana");
  } else {
    console.log(i + " bananas");
  }
}

// (B)Чётные числа

var b = Number(prompt("Введите чётное число"));
var sum = 0;

for (var i = 2; i < b; i += 2) {
  sum += i;
}

console.log("Сумма чётных чисел:", sum);

// (C) Возведение в степень

var number = Number(prompt("Введите число"));
var power = Number(prompt("Введите степень"));

var result = 1;

for (var i = 0; i < power; i++) {
  result *= number;
}

console.log("Результат:", result);
