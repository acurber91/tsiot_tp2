/* 
 * Testing de Sistemas de Internet de las Cosas
 * Carrera de Especialización en Internet de las Cosas (CEIoT)
 * 
 * El siguiente programa cumple con los requisitos del Trabajo Práctico Nº2.
 * 
 * Autor: Esp. Ing. Agustín Curcio Berardi
*/

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

describe("En una lista vacía:", function() {
    var lista = new Lista();
    it("Hay cero elementos.", function() {
        assert.equal(lista.count(), 0);
    })
    it("No se encuentra ninguna clave.", function () {
        assert.isNaN(lista.find("clave"));
    })
})

describe("No se debe agregar un elemento:", function() {
    var lista = new Lista();
    lista.add(4, 6);
    it("Si su clave o valor no es una cadena de texto.", function() {
        assert.equal(lista.count(), 0);
    })
})

describe("Cuando se agrega un elemento a una lista vacía:", function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    it("Hay un elemento.", function() {
        assert.equal(lista.count(), 1);
    })
    it("Se recupera el valor a partir de la clave.", function() {
        assert.equal(lista.find("clave"), "valor");
    })
    it("La lista de claves está ordenada.", function() {
        assert.deepEqual(lista.find_all(), ["clave"]);
    })
})

describe("Cuando se agrega una clave existe a la lista:", function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave", "actualizado");
    it("Se actualiza el valor.", function() {
        assert.equal(lista.find("clave"), "actualizado");
        assert.equal(lista.count(), 1);
    })
})

describe("Cuando se agrega un elemento al principio de la lista:", function() {
    var lista = new Lista();
    lista.add("animal", "perro");
    lista.add("edificio", "casa");
    it("La lista de claves está ordenada.", function() {
        assert.deepEqual(lista.find_all(), ["animal", "edificio"]);
        assert.equal(lista.count(), 2);
    })
})

describe("Cuando se agrega un elemento al final de la lista:", function() {
    var lista = new Lista();
    lista.add("edificio", "casa");
    lista.add("animal", "perro");
    it("La lista de claves está ordenada.", function() {
        assert.deepEqual(lista.find_all(), ["animal", "edificio"]);
        assert.equal(lista.count(), 2);
    })
})

describe("Cuando se elimina un elemento de una lista con un único elemento:", function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.delete("clave");
    it("No hay ningún elemento.", function() {
        assert.equal(lista.count(), 0);
    })
    it("No se puede recuperar el valor a partir de la clave.", function() {
        assert.isNaN(lista.find("clave"));
    })
    it("La lista de claves está vacía.", function() {
        assert.deepEqual(lista.find_all(), []);
    })
})