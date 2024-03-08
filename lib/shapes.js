class Logo{
    constructor(text, color, textColor){
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
    generateSVG() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="24" xmlns="http://www.w3.org/2000/svg">${this.text}</text>`;
    }
};

class Square extends Logo{
    generateSVG(){
        return `<svg width="300" height="200"><rect width="300" height="200" fill="${this.color}"/>` + super.generateSVG() + `</svg>`;
    }
};

class Triangle extends Logo{
    generateSVG(){
        return `<svg width="300" height="200"><polygon points="150,0 300,200 0,200" fill="${this.color}"/>` + super.generateSVG() + `</svg>`;
    }
};

class Circle extends Logo{
    generateSVG(){
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="100" fill="${this.color}"/>` + super.generateSVG() + `</svg>`;
    }
};

module.exports = {Logo, Square, Triangle, Circle};