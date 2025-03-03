export function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype = {};
Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
};
Rectangle.prototype.getDimensionsDescription = function () {
    return `Width = ${this.width}, Height = ${this.height}`;
};
Rectangle.prototype.constructor = Rectangle;

export function Square(sideLength) {
    Rectangle.call(this, sideLength, sideLength);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.getDimensionsDescription = function () {
    return `Side Length = ${this.width} (${Rectangle.prototype.getDimensionsDescription.call(this)})`;
};
