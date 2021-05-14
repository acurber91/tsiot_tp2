module.exports = class Lista {
    
    #elementos;
    
    constructor() {
        this.#elementos = [];
    }
    
    count() {
        return this.#elementos.length;
    }

    find(key) {
        var value; 
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].key == key) {
                value = this.#elementos[i].value;
            }
        }
        if(value)
        {
            return value;
        }
        else
        {
            return NaN;
        }
    }

    add(key, value) {
        this.#elementos.push({key, value});
    }
};