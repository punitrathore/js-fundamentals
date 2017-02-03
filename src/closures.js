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
