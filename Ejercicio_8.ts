/*
    TIPOS LITERALES

    Los tipos literales son un sub-tipo que creamos a partir de valores concretos.
    Puedes leer más en: https://www.typescriptlang.org/docs/handbook/literal-types.html

    --- Resultado esperado en consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

// Modifica el código bajo esta línea

type PersonajesLiterales = "bueno" | "malo" | "feo"

function getName(personaje: PersonajesLiterales) {
    if (personaje==="bueno") {
      return 'Rubio';
    }

    if (personaje==="malo") {
      return 'Sentencia';
    }

    if (personaje==="feo") {
      return 'Tuco';
    }
}

// Modifica el código sobre esta línea

console.log(
    `Al bueno lo llamaban ${getName('bueno')}, al malo ${getName('malo')} y, al feo, ${getName('feo')}`
  );

export {}; //https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
