const FiguresModule = (() => {
    class Rectangle {
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

    class Square extends Rectangle {
        constructor(sideLength) {
            super(sideLength, sideLength);
        }

        getDimensionsDescription() {
            return `Side Length = ${this.width}, (${super.getDimensionsDescription()})`;
        }
    }

    return {
        Rectangle,
        Square,
    };
})();

const FiguresLegacyModule = (() => {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }

    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };

    Rectangle.prototype.getDimensionsDescription = function () {
        return `Width = ${this.width}, Height = ${this.height}`;
    };

    function Square(sideLength) {
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

    return {
        Rectangle,
        Square,
    };
})();

export {
    FiguresModule,
    FiguresLegacyModule
};

(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const modules = await import('./index.js');

    for (const [moduleName, module] of Object.entries(modules)) {
        const {Rectangle, Square} = module;

        const rectangle = new Rectangle(10, 5);
        const square = new Square(6);

        console.group(`\nModul ${moduleName}`);
        [rectangle, square].forEach(figure => {
            console.groupCollapsed('Figure', figure.constructor.name);
            console.log('Area:', figure.calculateArea());
            console.log('Dimension:', figure.getDimensionsDescription());
            console.groupEnd();
        });
        console.groupEnd();
    }
})();