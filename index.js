//CODIGO USANDO REDUCE

// Array de números
const numbers1 = [1, 2, 3, 4, 5];

// Suma de todos los números utilizando reduce
const sum = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// Mostrar el resultado en la página
document.getElementById("result1").textContent = `La suma es: ${sum}`;


//CODIGO USANDO FILTER

// Array de números
const numbers2 = [1, 2, 3, 4, 5];

// Filtrar los números pares utilizando filter
const evenNumbers = numbers2.filter((number) => {
    return number % 2 === 0;
});

// Mostrar el resultado en la página
document.getElementById("result2").textContent = `Números pares: ${evenNumbers}`;

//CODIGO PARA LOS OBJETOS DE PERSONAS

const personasFamosas = [
    {
        nombre: "Michael Jordan",
        edad: 58,
        fechaNacimiento: "17 de febrero de 1963",
        ocupacion: "Deportista",
        equipoBanda: "Chicago Bulls"
    },
    {
        nombre: "Jennifer Lopez",
        edad: 52,
        fechaNacimiento: "24 de julio de 1969",
        ocupacion: "Cantante",
        equipoBanda: "En solitario"
    },
    {
        nombre: "Tom Hanks",
        edad: 65,
        fechaNacimiento: "9 de julio de 1956",
        ocupacion: "Actor",
        equipoBanda: null
    },
    {
        nombre: "Serena Williams",
        edad: 40,
        fechaNacimiento: "26 de septiembre de 1981",
        ocupacion: "Deportista",
        equipoBanda: "Sin equipo"
    },
    {
        nombre: "Angelina Jolie",
        edad: 46,
        fechaNacimiento: "4 de junio de 1975",
        ocupacion: "Actriz",
        equipoBanda: null
    },
    {
        nombre: "Lionel Messi",
        edad: 34,
        fechaNacimiento: "24 de junio de 1987",
        ocupacion: "Deportista",
        equipoBanda: "Paris Saint-Germain"
    },
    {
        nombre: "Rihanna",
        edad: 34,
        fechaNacimiento: "20 de febrero de 1988",
        ocupacion: "Cantante",
        equipoBanda: "En solitario"
    },
    {
        nombre: "Leonardo DiCaprio",
        edad: 47,
        fechaNacimiento: "11 de noviembre de 1974",
        ocupacion: "Actor",
        equipoBanda: null
    },
    {
        nombre: "Taylor Swift",
        edad: 32,
        fechaNacimiento: "13 de diciembre de 1989",
        ocupacion: "Cantante",
        equipoBanda: "En solitario"
    },
    {
        nombre: "Usain Bolt",
        edad: 35,
        fechaNacimiento: "21 de agosto de 1986",
        ocupacion: "Deportista",
        equipoBanda: "Sin equipo"
    }
];

// Obtener el elemento div para mostrar la información
const divInfo = document.getElementById("info");

// Recorrer el arreglo utilizando forEach y mostrar la información en HTML
personasFamosas.forEach((persona) => {
    const { nombre, edad, fechaNacimiento, ocupacion, equipoBanda } = persona;

    const infoHTML = `
    <div>
      <h5>${nombre}</h5>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
      <p><strong>Ocupación:</strong> ${ocupacion}</p>
      <p><strong>Equipo/Banda:</strong> ${equipoBanda || "N/A"}</p>
    </div>
    <hr>
  `;

    divInfo.innerHTML += infoHTML;
});

//CODIGO PARA HACER FUNCIONAR LA API DEL CLIMA

// Función para obtener un chiste aleatorio de Chuck Norris
async function obtenerChisteChuckNorris() {
    const url = 'https://api.chucknorris.io/jokes/random';
  
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos.value;
    } catch (error) {
      console.log('Error al obtener el chiste de Chuck Norris:', error);
    }
  }
  
  // Ejemplo de uso: obtener un chiste y mostrarlo en la página
  obtenerChisteChuckNorris()
    .then((chiste) => {
      const divChiste = document.getElementById('chiste');
      divChiste.textContent = chiste;
    })
    .catch((error) => {
      console.log('Error al obtener el chiste de Chuck Norris:', error);
    });