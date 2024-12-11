// let company=["bloomberg",'google','meta','uber','IBM','netflix']
// company.shift()
// company.splice(2,1,"Ola")
// company.pop()
// company.push("Amazon")
// company.unshift("AI")
// console.log(company.slice(2,5).toString())

const read=require('prompt-sync')();
let number=read("Enter n:   ");
let num=[];
for(let i=1;i<=number;i++){
    num[i-1]=i;
}
const add=num.reduce((result,value)=>{return result+value})
const mul=num.reduce((final,val)=>{return final*val})

console.log(num)
console.log(add)
console.log(mul)