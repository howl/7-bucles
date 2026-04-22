/* Suma del 1 al 100 */
let acumulado = 0;
for (let i = 1; i <= 100; i++)
  acumulado += i;
console.log(acumulado);

/* Números pares del 1 al 50 */
for (let i = 1; i <= 50; i++)
  if (!(i % 2))
    console.log(i);

/* Tabla de multiplicar */
const numeroMultiplicar = prompt('¿De qué número quieres la tabla de multiplicar?');
for (let i = 0; i <= 10; i++)
  console.log(`${numeroMultiplicar} x ${i} = ${numeroMultiplicar * i}`);

/* Cuenta regresiva */
for (let i = 10; i > 0; i--)
  console.log(i);

/* Factorial de un número */
const numeroFactorial = prompt('Intorduce el número del que quieres que te calcule el factorial')
let acumuladoFactorial = 1;
for (let i = numeroFactorial; i >= 1; i--)
  acumuladoFactorial *= i;
console.log(`${numeroFactorial}! = ${acumuladoFactorial}`)
