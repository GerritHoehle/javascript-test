export function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
};
Rectangle.prototype.getDimensionsDescription = function () {
    return `Width = ${this.width}, Height = ${this.height}`;
};

export function Square(sideLength) {
    Rectangle.call(this, sideLength, sideLength);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.calculateArea = function () {
    return Math.pow(this.width, 2);
};

Square.prototype.getDimensionsDescription = function () {
    return `Side Length = ${this.width} (${Rectangle.prototype.getDimensionsDescription.call(this)})`;
};
