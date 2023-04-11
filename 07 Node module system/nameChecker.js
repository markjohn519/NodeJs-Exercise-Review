const nameChecker = (name) => {
  if (typeof name === 'string') {
    return console.log('Hello ' + name);
  } 
  // else if (typeof obj === 'object') {
  //   return console.log('This came from Object ' + obj.age);
  // }
  return console.log(`This ${name} is a number`)
}

module.exports = nameChecker
