// const logger = require('pino')()
const nameChecker = require('./nameChecker')

const name2 = process.argv[2]

const obj = {
  name: 'mark',
  age: 23
}

// logger.info(name2)
nameChecker(obj.name)
