
function exec(fn, a,b){
   return fn(a,b)
}
const somar = (x,y) =>console.log(x+y) 
const subtrair = (x,y) => console.log(x-y) 
exec(somar, 56,38)
exec(subtrair, 182,27)

