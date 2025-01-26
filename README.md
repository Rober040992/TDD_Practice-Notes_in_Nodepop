# TDD Con Javascript.
Proyecto del módulo de Frontend PRO del Bootcamp de Web de KeepCoding.

## Requisitos
Para el seguimiento del curso vamos a utilizar las herramientas que ya conocemos:
- Visual Studio Code
- NodeJS
- NPM
- Git

## Proyecto
El proyecto consiste en la creación de diferentes tests sobre una aplicación básica en NodeJS.


## Mi notas-guia TDD
primero hacer npm i -y
creo examples con suma js y suma.test.js
$ npm install --save-dev jest //instalar jest para el testing jest.io para la docu
hay que usar common.js no ESM . o bien inicializar la config de jest para indicarlo
cambiamos el script "test": "jest --verbose"
para que nuestro navegador complete el codigo: npm i -D @types/jest
USAMOS esta sintaxis: 

const suma = require('./suma');

describe("Funcion suma", () => {

    test("Sumar 0 + 0 es igual a 0", () => {
        expect(suma(0, 0)).toEqual(0);
    })

y corremos npm run test

podemos anidar los modulos "describe" pero no los test
usamos test.only() para que solo se ejecute ese test en concreto y test.skip() para saltar ese test en concreto 
podemos encontrar la palabra reservada it(no me gusta) en vez de test()
añadimos --watch para que corra todo el rato pero necesitamos que nuestro repo este inicializado "git init" si no --watchAll

Para ES6 
"test:module": "cross-env NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest",
"test:watch": "cross-env NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest --watch",

para los matchers
npm i --save-dev jest-extended
y en el json; 
        ,
  "jest":{
    "setupFilesAfterEnv": ["jest-extended/all"]
  }


  creando config de babel ver video clase 3 19:55
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- crear babel.cofig.cjs en la raiz
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

