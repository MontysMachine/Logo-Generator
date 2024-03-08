const inquirer = require('inquirer');
const fs = require('fs');
const {Logo, Square, Triangle, Circle } = require('./lib/shapes.js');


inquirer
.prompt([
{
    type: 'input',
    message: 'Please enter 3 characters to be used in your logo\n',
    name: 'text'
},
{
    type: 'input',
    message: 'Please enter the color keyword or hexadecimal number for the text in your logo\n',
    name: 'textColor'
},
{
    type: 'input',
    message: 'Please enter the color keyword or hexadecimal number for your logo\n',
    name: 'color'
},
{
    type: 'list',
    message: 'Please choose a shape for your logo',
    choices: ['Square', 'Triangle', 'Circle'],
    name: 'shape'
}
])
.then(answers => {
const shape = answers.shape;
const text = answers.text;
const color = answers.color;
const textColor = answers.textColor;

let logo;
switch (shape) {
    case 'Square':
    logo = new Square(text, color, textColor);
    break;
    case 'Triangle':
    logo = new Triangle(text, color, textColor);
    break;
    case 'Circle':
    logo = new Circle(text, color, textColor);
    break;
    default:
    console.log('Invalid answers');
    return;
}


const htmlContent = `<html>
    <head>
    <title>Logos</title>
    </head>
    <body>
        ${logo.generateSVG()}
    </body>
    </html>`;

fs.writeFile('./examples/logos.html', htmlContent, err => {
    if (err) {
    console.error('Error writing HTML file:', err);
    } else {
    console.log('HTML file saved successfully: ./examples/logos.html');
    }
});
})
.catch(error => {
console.error('Error:', error);
});
