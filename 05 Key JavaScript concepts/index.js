const name2 = process.argv[2]

// const obj = {
//   name: 'mark',
//   age: 23
// }

const nameChecker = (name) => {
  debugger
  const obj = {
    name: 'mark',
    age: 23
  }
  if (typeof name === 'string') {
    return console.log('Hello ' + name);
  } else if (typeof obj === 'object') {
    return console.log('This came from Object ' + obj.age);
  }
  return console.log(`This ${name} is a number`)
}

nameChecker(name2)
nameChecker(obj.name)