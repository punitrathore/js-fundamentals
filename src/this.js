console.log(this)

this.foo = 'bar';
console.log(this);

var _this = this


const whatsThis = {
  first: 'Lady',
  last: 'Gaga',
  full: function() {
    console.log('this::', this);
    return this.first
      + ' '
      + this.last}
}
console.log(whatsThis.full());

// using the bind function to change the `this`
const whatsThisBind = {
  first: 'Lady',
  last: 'Gaga',
  full: (function() {
    console.log('this::', this);
    return this.first
      + ' '
      + this.last}).bind(_this)
}
console.log(whatsThisBind.full());

// using the arrow function, it rebinds the `this`
const whatsThisArrow = {
  first: 'Lady',
  last: 'Gaga',
  full: () => {
    console.log('this::', this);
    return this.first
      + ' '
      + this.last
  }
}
console.log(whatsThisArrow.full());
