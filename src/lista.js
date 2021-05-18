module.exports = class Lista {
    
    #elementos;
   
    constructor() {
        this.#elementos = [];
    }

    find_clave(clave) {
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }
    
    count() {
        return this.#elementos.length;
    }

    find(clave) {
        var index = this.find_clave(clave);
        if(isNaN(index)) {
            return index;
        }
        else {
            return this.#elementos[index].valor;
        }
    }

    sort() {
        this.#elementos.sort((a, b) => a.clave.localeCompare(b.clave))
    }

    add(clave, valor, order = true) {
        if(typeof clave === "string" && typeof valor === "string") {
            var index = this.find_clave(clave);
            if(isNaN(index)) {
                if(order == true) {
                    this.#elementos.push({clave, valor});
                }
                else {
                    this.#elementos.unshift({clave, valor});
                }
                this.sort();
            }
            else {
                this.#elementos[index].valor = valor;
            }
        }
    }

    find_all()
    {
        return this.#elementos;
    }

    delete(clave)
    {
        var index = this.find_clave(clave);
        if(isNaN(index)) {
            return index
        }
        else {
            this.#elementos.splice(index, 1);
            return true
        }
    }
};