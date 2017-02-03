(function() {console.log('hello friends')}())

// Module pattern
var counter = (function() {
  let i = 0
  return {
    get: function() {
      return i
    },
    set: function(val) {
      i = val
    },
    increment: function() {
      i++
    },
    reset: function() {
      this.set(0)
    }
  }
}());

console.log(counter)
console.log(counter.get())
counter.set(3)
console.log(counter.get())
counter.increment()
console.log(counter.get())
counter.reset();
console.log(counter.get())
