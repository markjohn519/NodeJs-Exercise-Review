const name2 = process.argv[2]

const obj = {
  name: 'mark',
  age: 23
}

const nameChecker = (name) => {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string') {
      resolve('Hello ' + name);
    } else {
      reject(new Error('A name should only be String'));
    }
  });
}

nameChecker(name2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });