function makeCounter(initValue) {
  let counter = initValue || 0
  return {
    get() {return counter},
    inc() {counter++}
  }
}

let c = makeCounter(10)
console.log(c.get())
c.inc()
console.log(c.get())


function add(a,b){
  return a + b
}

function addHOF(a) {
  return function(b){
    return a + b
  }
}

console.log(add(1,3))
let add5 = addHOF(5)
let add6 = addHOF(6)
console.log(add5(add6(1)))
