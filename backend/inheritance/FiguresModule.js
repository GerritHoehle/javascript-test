export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    getDimensionsDescription() {
        return `Width = ${this.width}, Height = ${this.height}`;
    }
}

export class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getDimensionsDescription() {
        return `Side Length = ${this.width}, (${super.getDimensionsDescription()})`;
    }
}