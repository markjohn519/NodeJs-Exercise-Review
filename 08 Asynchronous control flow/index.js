// const logger = require('pino')()
const name2 = process.argv[2]

const obj = {
  name: 'mark',
  age: 23
}

const nameChecker = (name) => {
  if (typeof name === 'string') {
    return console.log('Hello ' + name);
  } 
  return console.log(`This ${name} is a number`)
}

function callback(callback) {
  callback(name2)
}

function myPromise() {
  return new Promise((resolve, reject) => {
    if (typeof obj.name === 'string') {
      resolve('This promise is resolve')
    } 
    reject('This promise is rejected')
  })
}



// logger.info(name2)
// callback(nameChecker)
// myPromise.then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.err(err)
// });

async function asyncCall() {
  console.log('waiting')
  const result = await myPromise()
  console.log(result);
}

asyncCall()