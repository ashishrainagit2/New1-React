import React from 'react'
import TestingExample from '../testingExample/testingExample'
import TestingExampleTwo from '../TestingExampleTwo/TestingExampleTwo'

function TestingExampleWrapper() {
    return (
        <div>
            <p> This file is particularly created for testing purpose, However testing has been added to few other pages as well!</p>
            <div>
                <TestingExample>had to add to include its children inside route</TestingExample>
            </div>

            <div>
                <TestingExampleTwo/>
            </div>
           
        </div>
    )
}

export default TestingExampleWrapper
