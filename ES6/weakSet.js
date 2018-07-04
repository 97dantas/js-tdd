let obj1 = {
    name: 'William',
    age: 22
}
let obj2 = {
    name: 'Israel',
    age: 20
}

let ws = new WeakSet([obj1, obj2])

console.log(ws.has(obj1))
