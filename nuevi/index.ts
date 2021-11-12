
const ReadFile = require('fs');

ReadFile.readFile('C:/emilio/1.txt','utf8',(error,Datos) =>{
    
    if(error){
        console.log(error)
    }
    else{
        console.log(Datos)
    }
})

console.log(process.env)