interface Person {
    name: string
    age: number
}

function printPerson(person: Person) {
    console.log(person.name + ',' + person.age)
}

let p = { name: 'John', age: 28 }

printPerson(p)