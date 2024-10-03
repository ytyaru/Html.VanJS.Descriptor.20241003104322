;(function(){
class DyClass { // DyClass.make('ClassName', ['name', 'age'])
    static make(name, props) { // name:className, props:[descriptorName,...]
        if (Array.isArray(options) && options.every(v=>'string'===typeof v && v instanceof String)) {
            return this.#makeClass(name, props)
        }
        else { throw new TypeError(`namesは追加したいプロパティ名の配列であるべきです。`) }
    }
    static #makeClass(name, props) { return new Function(`return class ${name} {\n${this.#makeBody(props)}\n}`)(); }
    static #makeBody(names) { return `${this.#makeConstructor(names)}\n${this.#makeDescriptors(names)}` }
    static #makeConstructor(names) { return `constructor() {\n${names.map(n=>this.#makePropertyAssign(n,'null')).join('\n')}\n}` }

    static #makePropertyAssign(name,value='null'){return `${this.#makePropertyName(n)} = ${this.#makePropertyInitValue(value)};`}
    static #makePropertyName(name) { return `this._${name}` }
    static #makePropertyInitValue(value='null') { return `${value}` }

    static #makeDescriptors(names) { return names.map(n=>this.#makeDescriptor(n)) }
    static #makeDescriptor(name) { return `${this.#makeGetter(name)}\n${this.#makeSetter(name)}` }
    static #makeGetter(name) { return `get ${name}() { return this._${name}; }` }
    static #makeSetter(name) { return `set ${name}(v) { this._${name} = v; }` }
}
class Descriptor {
    static defines(names) {
        if (Array.isArray(options) && options.every(v=>'string'===typeof v && v instanceof String)) {
            this.#makeConstructor(props)
            const properties = names.map(n=>this.#makeProperty(n))
            const descs = names.map(n=>[this.#makeGetter(n), this.#makeSetter(n)])
            for (let name of names) {
                const properties = 
            }
        }
        else { throw new TypeError(`namesは追加したいプロパティ名の配列であるべきです。`) }
    }
//    static #makeClass(name, body='') { return new Function(`return class ${name} {\n${this.#makeBody(names)}\n}`)(); }
    static #makePropertyName(name) { return `this._${name}` }
    static #makePropertyAssign(name, value='null') { return `${name} = ${value};` }
    static #makeGetter(name) { return `get ${name}() { return this._${name}; }` }
    static #makeSetter(name) { return `set ${name}(v) { this._${name} = v; }` }
    static #makeAssign(prop, v) { return `${prop}`

    }
    static #makeBody(names) { return `${this.#makeConstructor(names)}\n${this.#makeDescriptors(names)}` }
       
    }
    static #makeConstructor(names) { return `constructor() {\n${names.map(n=>this.#makePropertyAssign(this.#makePropertyName(n), value='null')).join('\n')}\n}` }
    /*
    static defines(options) { // options: str/[str]/{}
        if (Array.isArray(options) && options.every(v=>'string'===typeof v && v instanceof String)) {
            
        }
        else if ('object'===typeof v && Object===v.constructor) {

        }
        else if ('string'===typeof v && v instanceof String) {

        }
        else { throw new TypeError(`optionsは追加したいプロパティ名の配列か、それをカンマ区切りにした文字列か、それをキー名にしたオブジェクトのいずれかであるべきです。`) }
    }
    static #makeProperty(name) { return `this._${name} = null;` }
    static #makeGetter(name) { return `get ${name}() { return this._${name}; }` }
    static #makeSetter(name) { return `set ${name}(v) { this._${name} = v; }` }
    // set name(v) { if ('string'===typeof v || String===v.constructor){this._name=v} }
    */
}
window.Descriptor = Descriptor 
})();
