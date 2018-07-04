class Animal {
    constructor (name) {
        this.name = name
    }

    hello () {
        console.log(`Animal name ${this.name}`)
    }
}

const Cat = new Animal('Cat', 'Meow')
Cat.hello()

class Dog extends Animal {
    constructor (name,sound) {
        super(name)
        this.sound = sound
    }
    bark () {
        console.log(`Bark animal ${this.name}, ${this.sound}`)
    }
}

const Toby = new Dog('Toby','AuAUu')
	Toby.bark()
