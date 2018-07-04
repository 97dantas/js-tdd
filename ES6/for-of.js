// iterators
// iterable

let txt = 'Brazil'
let it = txt[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let letter of txt) {
    console.log(letter)
    if (letter === 'i') break
}
