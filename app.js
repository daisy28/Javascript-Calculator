const operators = {
  add: '+',
  subtract: '-',
  divide: '/',
  multiply: '*',
}

const add = (a, b) => {
  const result = (a + b).toFixed(2)
  console.log(result)
}

const subtract = (a, b) => {
  const result = (a - b).toFixed(2)
  console.log(result)
}

const divide = (a, b) => {
  const result = (a / b).toFixed(2)
  console.log(result)
}

const multiply = (a, b) => {
  const result = (a * b).toFixed(2)
  console.log(result)
}

if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
  console.log('Please Provide all arguments')
  console.log('EX: node app.js <first_value> <"operator"> <second_value>')
  process.exit(1)
}

switch (process.argv[3]) {
  case operators.add:
    add(parseFloat(process.argv[2]), parseFloat(process.argv[4]))
    break
  case operators.subtract:
    subtract(parseFloat(process.argv[2]), parseFloat(process.argv[4]))
    break
  case operators.divide:
    divide(parseFloat(process.argv[2]), parseFloat(process.argv[4]))
    break
  case operators.multiply:
    multiply(parseFloat(process.argv[2]), parseFloat(process.argv[4]))
    break
  default:
    console.log(
      'Please provide a valid operator\n Ex: "+" for addition \n "-" for subtraction \n "*" for multiplication \n "//" for division \n ',
    )
}
