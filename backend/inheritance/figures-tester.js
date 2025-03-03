export function testFigure(figure) {
    const name = figure.constructor.name;
    const area = figure.calculateArea()
    const descr = figure.getDimensionsDescription()

    console.group('Figure', name);
    console.log('Area:', area);
    console.log('Dimension:', descr);

    console.groupEnd();
}

export function testFigureModule({ moduleDescription, module }) {
    const { Rectangle, Square } = module;

    const rectangle = new Rectangle(10, 5);
    const square = new Square(6);

    console.group(`\nModul ${moduleDescription}`);
    [rectangle, square].forEach(figure => {
        testFigure(figure);
    });
    console.groupEnd();

}