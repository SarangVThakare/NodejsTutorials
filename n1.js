const x = require('./exmod');
const {add,subfn} = require('./exmod');
console.log('hello');
//console.log(window); DOM is deleted in node js
console.log(x);
console.log(x.add(9,8), x.subfn(9,7));
console.log(add(8,7), subfn(8,7), x.mul(2,3));

