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

    let logo;
    switch (shape) {
      case 'Square':
        logo = new Square(text, color);
        break;
      case 'Triangle':
        logo = new Triangle(text, color);
        break;
      case 'Circle':
        logo = new Circle(text, color);
        break;
      default:
        console.log('Invalid answers');
        return;
    }

    const finishedLogo = logo.generateSVG();

    fs.writeFile('./examples/logo.svg', finishedLogo, (err) => {
      if (err) {
        console.log('Error generating your logo:', err);
        return;
      } else {
        console.log('Your logo has been generated!');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
