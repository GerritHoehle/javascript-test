export function testFigure(figure) {
    console.group('Figure', figure.constructor.name);
    console.log('Area:', figure.calculateArea());
    console.log('Dimension:', figure.getDimensionsDescription());
    console.groupEnd();
}

export function testFigureModule({moduleDescription, module}) {
    const {Rectangle, Square} = module;
    const rectangle = new Rectangle(10, 5);
    const square = new Square(6);

    console.group(`\nModul ${moduleDescription}`);
    [rectangle, square].forEach(figure => {
        testFigure(figure);
    });
    console.groupEnd();

}