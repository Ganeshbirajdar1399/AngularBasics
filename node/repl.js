const { PORT, sum } = require('./module');

const a = 10;
const b = 20;

console.log('Sum from export:', sum(a, b));
console.log('PORT:', PORT);
