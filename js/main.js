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
let numeroMultiplicar = prompt('¿De qué número quieres la tabla de multiplicar?');
for (let i = 0; i <= 10; i++)
  console.log(`${numeroMultiplicar} x ${i} = ${numeroMultiplicar * i}`);
