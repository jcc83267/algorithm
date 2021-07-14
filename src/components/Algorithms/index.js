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
}]
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