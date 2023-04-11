// const logger = require('pino')() 
const name2 = process.argv[2] 
const obj = { name: 'mark', age: 23 } 

const nameChecker = (name) => {
  if (typeof name === 'string') {
    return console.log('Hello ' + name); 
  } // else if (typeof obj === 'object') { // return console.log('This came from Object ' + obj.age); // } 
  throw new Error('A name should only be String') 
} 
try { // logger.info(name2) 
  nameChecker(name2) 
} catch (error) {
  console.log(error);
}