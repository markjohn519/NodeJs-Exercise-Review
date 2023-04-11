const name2 = process.argv[2]

const nameChecker = (name) => {
  debugger
  if (typeof name === 'string') {
    return console.log('Hello ' + name);
  }
  return console.log(`This ${name} is a number and not a name`)
}

nameChecker(name2)
nameChecker(2)