function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
//any function in this files are private, and should be exported first for use.
module.exports = {
    add,
    subfn:sub};//we can also keep other name of our functions

//another method of exporting
exports.mul = (a,b)=> a*b;
//here mul is property of that, and name of function is anonymous









