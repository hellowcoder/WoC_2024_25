// let company=["bloomberg",'google','meta','uber','IBM','netflix']
// company.shift()
// company.splice(2,1,"Ola")
// company.pop()
// company.push("Amazon")
// company.unshift("AI")
// console.log(company.slice(2,5).toString())

const read=require('prompt-sync')();
let str=read("Enter your string")
const number=(str) =>{
    let count=0
    for(let i=0;i<str.length;i++){
        
        if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
            count++
        }
    }
    return count
}
console.log(number(str))