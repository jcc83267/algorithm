import React from 'react'

const algorithmList = [{
    name: 'arithmetic',
    description: 'add, substract, multipoly, divide',
    exercise: `make several functions to accomplish: 
    "add": return the result of 'num1' plus 'num2', 
    "subtract": return the result of 'num1' minus 'num2', 
    "multiply": return the result of 'num1' times 'num2',
    "divide": return the result of 'num1' divided by 'num2'.`,
    answers: ``
},
{
    name: 'odd-or-even',
    description: 'is the number odd or even',
    exercise: `make a functions to accomplish: 
    If "num" is evenly divisible by 2, return the string "even"
    If "num" is  NOT evenly divisible by 2, return the string "odd"`,
    answers: ``
},
{name: 'log-nums',
description: 'gives a list of whole numbers',
exercise: `make a functions to accomplish: 
"logNums": returns all numbers from '1' up to a given number argument`,
answers: ``},
{name: 'log-even-nums',
description: 'gives a list of even whole numbers',
exercise: `make a functions to accomplish: 
"logEvenNums": returns all even numbers from '0' up to a given number argument`,
answers: ``},
{
    name: 'countdown',
description: 'gives a list of numbers in reverse order',
exercise: `make a functions to accomplish: 
"countdown": return all numbers starting from a given number argument to '1' inclusive`,
answers: ``
},
{
    name: 'sum-array',
description: 'add all numbers given an array and return its totals',
exercise: `make a functions to accomplish: 
"sumArray": add all numbers in a given array argument and return its total`,
answers: ``
},
{
    name: 'Fizz-Buzz',
description: 'A function that solves the fizz buzz problem(wiki https://en.wikipedia.org/wiki/Fizz_buzz)',
exercise: `make a functions to accomplish: 
"fizzBuzz":
-iterate through each number in the given array
- If a number is evenly divisible by 3, print "Fizz" to the console.
- If a number is evenly divisible by 5 print "Buzz" to the console.
- If a number is evenly divisible by 3 and 5, print "Fizz Buzz" to the console.
- Else print the number.
answers: ``
},
]

// arithmetic, odd-or-even, log-nums]

function Algorithms() {

    return (
        <section className="my-5" >
            <h1 id="Home">Algorithms</h1>
            <div className="my-2">
                <p>
                    A site to hold some Algorithms and examples
                </p>
            </div>
        </section>
    )
}

export default Algorithms