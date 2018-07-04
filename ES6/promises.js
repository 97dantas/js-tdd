/*
    Into Promise
*/

const defer = new Promise((resolve, reject) => {
    let cod = 1
    setTimeout(() => {
        if (cod) {
            resolve('Hello! It works!')
        } else {
            reject(new Error('Error'))
        }
    }, 2000)
})

const currency = new Promise((resolve, reject) => {
    resolve({ currency: 'euro', value: 3.15 })
})

Promise
    .all([currency, defer])
    .then(console.log)

Promise
    .race([currency, defer])
    .then(console.log)
