/*

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

describe("Cuando se crea una lista con un elemento:", function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    it("Hay un elemento.", function() {
        assert.equal(lista.count(), 1);
    })
    lista.add(4, 6);
    it("Solo acepta cadenas de texto.", function() {
        assert.equal(lista.count(), 1);
    })
    it("Se recupera el valor a partir de la clave.", function() {
        assert.equal(lista.find("clave"), "valor");
    })
    it("Si se agrega una clave existente, se actualiza el valor.", function() {
        lista.add("clave", "actualizado");
        assert.equal(lista.find("clave"), "actualizado");
        assert.equal(lista.count(), 1);
    })
})

describe("Cuando se agrega un elemento:", function() {
    var lista = new Lista();
    it("La lista está ordenada.", function() {
        lista.add("edificio", "casa");
        assert.deepEqual(lista.find_all(), [{clave: "edificio", valor: "casa"}]);
        assert.equal(lista.count(), 1);
    })
    it("La lista está ordenada cuando se lo agrega al principio.", function() {
        lista.add("animal", "perro", false);
        assert.deepEqual(lista.find_all(), [{clave: "animal", valor: "perro"}, {clave: "edificio", valor: "casa"}]);
        assert.equal(lista.count(), 2);
    })
    it("La lista está ordenada cuando se lo agrega al final.", function() {
        lista.add("accion", "correr");
        assert.deepEqual(lista.find_all(), [{clave: "accion", valor: "correr"}, {clave: "animal", valor: "perro"}, {clave: "edificio", valor: "casa"}]);
        assert.equal(lista.count(), 3);
    })
    it("También se lo puede borrar.", function() {
        assert.equal(lista.delete("edificio"), true);
        assert.deepEqual(lista.find_all(), [{clave: "accion", valor: "correr"}, {clave: "animal", valor: "perro"}]);
        assert.equal(lista.count(), 2);
    })
})