const moment = require('moment')

function add5days() {
  return moment().add(5, 'days')
}

function add5daysRevisited(dateStr) {
  return moment(dateStr).add(5, 'days');
}

console.log(add5daysRevisited('2017-02-03'))
