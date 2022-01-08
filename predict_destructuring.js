// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // will log 'Tesla', 'Mercedes', or 'Honda'
console.log(otherRandomCar) // will log 'Mercedes', or 'Honda'

