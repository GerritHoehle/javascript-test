const loadModules = async (...paths) => {
    const imports = paths.map((path) => import(path));
    const modules = await Promise.all(imports);

    const moduleMap = {};
    modules.forEach((module, idx) => {
        const modulePath = paths[idx];
        moduleMap[modulePath] = module;
    });
    return moduleMap;
};

const testFigureModule = (await import('./inheritance/figures-tester.js')).testFigureModule;
const figuresModules = await loadModules(
    './inheritance/FiguresModule.js',
    './inheritance/FiguresLegacyModule.js',
    './inheritance/FiguresArrowModule.js',
);

Object.entries(figuresModules).forEach(([modulePath, module]) => {
    testFigureModule({ moduleDescription: modulePath, module });
});