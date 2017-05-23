function greet(){
  return this.greeting;
}

console.log(greet.call({greeting: 'hello'}))

var greet1 = greet.bind({greeting:"namaste!"});
console.log(greet1());

var greet2 = greet.bind({greeting: 'aloha!'});
console.log(greet2());





























// function Point2D(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point2D.prototype.toString = function() {
//   return this.x + ',' + this.y;
// };

// function Point3D(x,y,z) {
//   this.x = x
//   this.y = y
//   this.z = z
// }

// let point3d = new Point3D(1,2,3);


// var p = new Point(1, 2);
// console.log(p.toString()) // '1,2'

