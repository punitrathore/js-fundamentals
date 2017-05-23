console.log('0::', this)

// this.first = 'Chris';
// this.last = 'Cornell';
// console.log('1::', this);

// var _this = this


// const whatsThis = {
//   first: 'Lady',
//   last: 'Gaga',
//   full: function() {
//     console.log('this inside whatsThis::', this);
//     return this.first
//       + ' '
//       + this.last}
// }
// console.log('2::', whatsThis.full());

// const norahJones = {first: 'Norah', last: 'Jones'}

// const boundFunction = whatsThis.full.bind(norahJones)

// boundFunction()

// // Arrow functions do not have their own this value.
// const whatsThisArrow = {
//   first: 'Zakir',
//   last: 'Hussain',
//   full: () => {
//     console.log('5::', this);
//     return this.first
//       + ' '
//       + this.last
//   }
// }

// //console.log('6::', whatsThisArrow.full.bind(_this)())
