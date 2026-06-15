"use strict";
/**
 * Tarea 01 - Estructuras de Datos
 * Unidad 1: TDAs, Interfaces Genéricas y Nodo Doblemente Enlazado
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// PUNTO 5, 6, 7 y 8 - Clase NodoDoblementeEnlazado<T>
// ============================================================
/**
 * Nodo para una lista doblemente enlazada.
 * Cada nodo conoce a su vecino siguiente Y a su vecino anterior,
 * lo que permite recorrer la lista en ambas direcciones.
 *
 * Implementa IComparable cuando T también es comparable,
 * permitiendo comparar nodos entre sí basándose en su dato.
 */
class NodoDoblementeEnlazado {
    // Punto 5 - Atributos
    dato;
    siguiente;
    anterior;
    // Punto 6 - Constructor
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null; // Por defecto no tiene vecino siguiente
        this.anterior = null; // Por defecto no tiene vecino anterior
    }
    // Punto 7 - toString()
    toString() {
        return `NodoDoblementeEnlazado(${this.dato})`;
    }
    // Punto 8 - Implementación de IComparable
    // Compara este nodo con otro delegando la comparación al dato interno
    comparar(otro) {
        return this.dato.comparar(otro.dato);
    }
}
// ============================================================
// PRUEBAS
// ============================================================
/**
 * Para probar la clase necesitamos un tipo T que implemente IComparable<T>.
 * Usamos números como ejemplo concreto.
 */
class Numero {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    comparar(otro) {
        return this.valor - otro.valor;
        // Si this.valor = 5 y otro.valor = 10 → retorna -5 (negativo = menor)
        // Si this.valor = 10 y otro.valor = 10 → retorna 0 (iguales)
        // Si this.valor = 15 y otro.valor = 10 → retorna 5 (positivo = mayor)
    }
    toString() {
        return `${this.valor}`;
    }
}
// Crear nodos
const nodo1 = new NodoDoblementeEnlazado(new Numero(10));
const nodo2 = new NodoDoblementeEnlazado(new Numero(20));
const nodo3 = new NodoDoblementeEnlazado(new Numero(30));
// Enlazar nodos manualmente
nodo1.siguiente = nodo2;
nodo2.anterior = nodo1;
nodo2.siguiente = nodo3;
nodo3.anterior = nodo2;
// toString()
console.log(nodo1.toString()); // NodoDoblementeEnlazado(10)
console.log(nodo2.toString()); // NodoDoblementeEnlazado(20)
// comparar()
console.log(nodo1.comparar(nodo2)); // -10 → nodo1 es menor
console.log(nodo2.comparar(nodo2)); //   0 → son iguales
console.log(nodo3.comparar(nodo1)); //  20 → nodo3 es mayor
// Recorrer hacia adelante
console.log("\nRecorrido hacia adelante:");
let actual = nodo1;
while (actual !== null) {
    console.log(actual.toString());
    actual = actual.siguiente;
}
// Recorrer hacia atrás
console.log("\nRecorrido hacia atrás:");
let actualAtras = nodo3;
while (actualAtras !== null) {
    console.log(actualAtras.toString());
    actualAtras = actualAtras.anterior;
}
// Ejemplo del tipo Par<A, B>
const parEjemplo = { primero: "edad", segundo: 20 };
console.log(`\nPar: ${parEjemplo.primero} → ${parEjemplo.segundo}`);
//# sourceMappingURL=index.js.map