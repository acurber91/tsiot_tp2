![header](doc/header.png)

# Trabajo Práctico Nº2

Autor:

* Agustín Curcio Berardi

Docente:

* Esteban Volentini

## Consignas

### Práctica TDD (Test-driven development)

Completar el desarrollo de una lista que almacena pares clave:valor iniciado en la clase utilizando TDD para el desarrollo de la misma.

Se deben implementar los siguientes requerimientos:

1. La lista debe almacenar pares clave:valor.
2. Las claves almacenadas en la lista deben ser únicas.
3. Las claves son cadenas de texto.
4. Se debe poder recuperar un valor a partir de una clave.
5. Se debe poder actualizar el valor asociado a una clave.
6. Se debe poder borrar una pareja a partir de la clave.
7. Se debe poder recuperar la cantidad de elementos almacenados en la lista.
8. Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.

Además de la funcionalidad implementada se evaluarán los siguientes aspectos del código:

- Consistencia en los identificadores utilizados para los métodos y atributos de las clases.
- Facilidad en la lectura del código respetando una adecuada indentación y separación con líneas en blanco de los diferentes bloques de código.
- Uso de las cadenas de texto de los bloques "describe" e "it" de los códigos de prueba para describir en forma clara el caso de prueba y el aspecto a verificar.
- Documentación mediante comentarios en el código fuente y en los archivos de pruebas.

---

## Solución propuesta

En la resolución propuesta, el archivo `lista.js` dentro de la carpeta `src` implementa todas las funcionalidades requeridas en las consignas del presente Trabajo Práctico. Se procuró escribir un código que sea simple y fácil de leer, atendiendo las pautas de prolijidad exigidas.

Por otro lado, el archivo `test_lista.js` dentro de la carpeta `test` implementa todos los casos de prueba solicitados. A diferencia del código de producción, no se agregaron comentarios ya que se entiende que en los bloques `describe` e `it` se describe correctamente el caso de prueba que se está testeando. El resultado que se obtuvo en la consola es el siguiente:

    agustin@laptop:~$ npm test

    > lista-tdd@1.0.0 test /home/agustin/MIoT/TSIoT/tp2/tp2
    > mocha --reporter spec


    En una lista vacía:
        ✓ Hay cero elementos.
        ✓ No se encuentra ninguna clave.

    No se debe agregar un elemento:
        ✓ Si su clave o valor no es una cadena de texto.

    Cuando se agrega un elemento a una lista vacía:
        ✓ Hay un elemento.
        ✓ Se recupera el valor a partir de la clave.
        ✓ La lista de claves está ordenada.

    Cuando se agrega una clave existe a la lista:
        ✓ Se actualiza el valor.

    Cuando se agrega un elemento al principio de la lista:
        ✓ La lista de claves está ordenada.

    Cuando se agrega un elemento al final de la lista:
        ✓ La lista de claves está ordenada.

    Cuando se elimina un elemento de una lista con un único elemento:
        ✓ No hay ningún elemento.
        ✓ No se puede recuperar el valor a partir de la clave.
        ✓ La lista de claves está vacía.


    12 passing (8ms)

---

![footer](doc/footer.png)