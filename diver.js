"use strict";
alert("🎉¡Enhorabuena!🎊 Has ganado un iPhone14📱🥳");
let respuesta;
do {
  respuesta = prompt(
    "Inserte la contraseña de la tarjeta de tu banco para conseguir el IPhone que has ganado (ni loco)",
    ""
  );
  if (respuesta == "ni loco") {
    alert("muy bien 😃");
  } else {
    alert("muy mal 🦌 sigue intentando");
  }
} while (respuesta != "ni loco");
let eresListo = confirm("Vamos a robar todo el dinero de tu cuenta! 😂 😛");

// do {
//   while (i > 0) {
//     i = i - 1;

//     if (x != numUser) {
//       console.log("sigue intentando");
//     }

//     console.log(i);
//   }
// } while (x === numUser);
// console.log("Has ganado");
