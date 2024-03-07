class Logo{
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    generateLogo(){
        return `<text x="10" y="180" fill="${this.color}">${this.text}</text>`;
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