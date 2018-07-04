// Generators

function * getNames () {
    console.log('Chamando primeiro nome')
    yield 'israel'
    console.log('Chamando segundo nome')
    yield 'dantas'
    console.log('Chamando terceiro nome')
    yield 'leite'
}

const names = getNames()

console.log(names.next())
console.log(names.next())
console.log(names.next())
