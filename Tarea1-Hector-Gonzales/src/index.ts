// 1 - Interfaz genérica

interface IContenedor<T> {
    agregar(elemento: T): void;          
    eliminar(): T | undefined;            
    obtener(): T | undefined;             
    estaVacia(): boolean;                 
    tamanio(): number;                    
}

// 2 - Interfaz IComparable

interface IComparable<T> {
    comparar(otro: T): number;
}

// 3 - Interfaz IIterable

interface IIterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

// 4 - Tipo genérico Par<A, B>

type Par<A, B> = {
    primero: A;
    segundo: B;
};

// 5, 6, 7 y 8 - Clase NodoDoblementeEnlazado

class NodoDoblementeEnlazado<T extends IComparable<T>>
    implements IComparable<NodoDoblementeEnlazado<T>> {

    // 5 - Atributos
    dato: T;
    siguiente: NodoDoblementeEnlazado<T> | null;
    anterior: NodoDoblementeEnlazado<T> | null;

    // 6 - Constructor
    constructor(dato: T) {
        this.dato = dato;
        this.siguiente = null;  
        this.anterior = null;    
    }

    // 7 - toString()
    toString(): string {
        return `NodoDoblementeEnlazado(${this.dato})`;
    }

    // 8 - Implementación de IComparable
    comparar(otro: NodoDoblementeEnlazado<T>): number {
        return this.dato.comparar(otro.dato);
    }
}

// PRUEBAS
class Numero implements IComparable<Numero> {
    constructor(public valor: number) {}

    comparar(otro: Numero): number {
        return this.valor - otro.valor;
    }

    toString(): string {
        return `${this.valor}`;
    }
}

const nodo1 = new NodoDoblementeEnlazado(new Numero(10));
const nodo2 = new NodoDoblementeEnlazado(new Numero(20));
const nodo3 = new NodoDoblementeEnlazado(new Numero(30));

nodo1.siguiente = nodo2;
nodo2.anterior = nodo1;
nodo2.siguiente = nodo3;
nodo3.anterior = nodo2;

// toString()
console.log(nodo1.toString());
console.log(nodo2.toString());

// comparar()
console.log(nodo1.comparar(nodo2));
console.log(nodo2.comparar(nodo2)); 
console.log(nodo3.comparar(nodo1)); 

// Recorrer hacia adelante
console.log("\nRecorrido hacia adelante:");
let actual: NodoDoblementeEnlazado<Numero> | null = nodo1;
while (actual !== null) {
    console.log(actual.toString());
    actual = actual.siguiente;
}

// Recorrer hacia atrás
console.log("\nRecorrido hacia atrás:");
let actualAtras: NodoDoblementeEnlazado<Numero> | null = nodo3;
while (actualAtras !== null) {
    console.log(actualAtras.toString());
    actualAtras = actualAtras.anterior;
}

// Ejemplo del tipo Par<A, B>
const parEjemplo: Par<string, number> = { primero: "edad", segundo: 20 };
console.log(`\nPar: ${parEjemplo.primero} = ${parEjemplo.segundo}`);
