var person = Object.create(null) // create as empty object
person.fullName = function() { return this.firstName
                               + ' '
                               + this.lastName}
console.log(person)

var foo = Object.create(person)
foo.firstName = 'bar';
foo.lastName = 'baz';
console.log(foo.fullName())
var bar = Object.create(foo);
console.log(bar.fullName())
