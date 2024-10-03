window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.Descriptor.20241003104322/`}, 'Descriptor')),
        p('JSのクラスにgetter/setterを実装する糖衣構文を作る。'),
//        p('Create sugar-coated syntax to implement getters/setters in JS classes.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())

    // 静的生成
    class C {
        constructor() { this._name = '' }
        get name() { return this._name }
        set name(v) { if ('string'===typeof v || String===v.constructor){this._name=v} }
    }
    console.log(C)
    // 動的生成
    function mkCls(name, body='') { return new Function(`return class ${name} {${body}}`)(); }
    const D = mkCls('D', `
        constructor() { this._name = '' }
        get name() { return this._name }
        set name(v) { if ('string'===typeof v || v instanceof String){this._name=v}else{throw new TypeError()} }
`)
    console.log(D)
    console.log(new D())
    const d = new D()
    d.name = '山田'
    console.log(d.name)
    d.name = 0
    console.log(d.name)
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

