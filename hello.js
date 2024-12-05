const read=require('prompt-sync')()
let b = [2,4,5,6,7]
b.splice(2,0,100,104) //index 2 ko remand pe liya uske bad ke 0 element ko delete kiya then index 2 se hi 100,104 ko insert kar diya.
console.log(b)  