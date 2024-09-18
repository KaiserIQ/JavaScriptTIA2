// Crear 4 arreglos diferentes
const numeros = [1, 2, 3, 4];
const nombres = ["Ana", "Luis", "Maria"];
const edades = [12, 22, 30];
const productos = [10, 20, 30];





// Aplicar métodos a cada arreglo

// Arreglo 1: numeros
console.log("Arreglo 1: numeros");

// .reduce() - Sumar todos los números en el arreglo
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma:", suma);

// .filter() - Filtrar los números mayores a 2
const mayoresDe2 = numeros.filter(num => num > 2);
console.log("Mayores de 2:", JSON.stringify(mayoresDe2));

// .map() - Multiplicar cada número por 2
const doble = numeros.map(num => num * 2);
console.log("Dobles:", JSON.stringify(doble));

// .forEach() - Recorrer e imprimir cada número en el arreglo
console.log("Recorriendo numeros:");
numeros.forEach(num => console.log(num));





// Arreglo 2: nombres
console.log("\nArreglo 2: nombres");

// .reduce() - Concatenar todos los nombres en un solo string
const nombresConcatenados = nombres.reduce((acc, nombre) => acc + " " + nombre, "");
console.log("Nombres concatenados:", nombresConcatenados);

// .filter() - Filtrar nombres que contienen la letra 'a'
const nombresConA = nombres.filter(nombre => nombre.includes("a"));
console.log("Nombres con 'a':", JSON.stringify(nombresConA));

// .map() - Convertir todos los nombres a mayúsculas
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", JSON.stringify(nombresMayusculas));

// .forEach() - Recorrer e imprimir cada nombre en el arreglo
console.log("Recorriendo nombres:");
nombres.forEach(nombre => console.log(nombre));





// Arreglo 3: edades
console.log("\nArreglo 3: edades");

// .reduce() - Sumar todas las edades en el arreglo
const sumaEdades = edades.reduce((acc, edad) => acc + edad, 0);
console.log("Suma de edades:", sumaEdades);

// .filter() - Filtrar las edades mayores o iguales a 18
const mayoresDe18 = edades.filter(edad => edad >= 18);
console.log("Mayores de 18:", JSON.stringify(mayoresDe18));

// .map() - Agregar 5 años a cada edad
const edadesEn5Años = edades.map(edad => edad + 5);
console.log("Edades en 5 años:", JSON.stringify(edadesEn5Años));

// .forEach() - Recorrer e imprimir cada edad en el arreglo
console.log("Recorriendo edades:");
edades.forEach(edad => console.log(edad));





// Arreglo 4: productos
console.log("\nArreglo 4: productos");

// .reduce() - Sumar el precio total de los productos
const precioTotal = productos.reduce((acc, precio) => acc + precio, 0);
console.log("Precio total:", precioTotal);

// .filter() - Filtrar productos con precios mayores a 15
const preciosAltos = productos.filter(precio => precio > 15);
console.log("Precios mayores de 15:", JSON.stringify(preciosAltos));

// .map() - Calcular el precio con IVA (21%) para cada producto
const preciosConIVA = productos.map(precio => precio * 1.21);
console.log("Precios con IVA:", JSON.stringify(preciosConIVA));

// .forEach() - Recorrer e imprimir cada precio en el arreglo
console.log("Recorriendo productos:");
productos.forEach(precio => console.log(precio));





// Crear 5 funciones tipo flecha

// 1. Función con cero parámetros - No recibe ningún argumento
const saludar = () => console.log("¡Hola!");
saludar();

// 2. Función con un parámetro - Recibe un número y devuelve su cuadrado
const alCuadrado = num => num * num;
console.log("Cuadrado de 3:", alCuadrado(3));

// 3. Función con dos parámetros - Recibe dos números y devuelve su suma
const sumar = (a, b) => a + b;
console.log("Suma de 2 y 3:", sumar(2, 3));

// 4. Función con tres parámetros - Recibe nombre, edad y ciudad, y devuelve una presentación
const presentarPersona = (nombre, edad, ciudad) => 
    `${nombre} tiene ${edad} años y vive en ${ciudad}.`;
console.log(presentarPersona("Ana", 25, "Madrid"));

// 5. Función que devuelve un valor sin 'return' - Recibe un número y devuelve su triple
const triplicar = num => num * 3;
console.log("Triplicar 4:", triplicar(4));