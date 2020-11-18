const { toJavascript } = require("../src/to-javascript");

describe(toJavascript, () => {
    it('should reformate Dropbear to valid JavaScript', () => {
        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                { type: 'NumericLiteral', value: 2 },
                { type: 'NumericLiteral', value: 3 },
                {
                    type: 'CallExpression',
                    name: 'subtract',
                    arguments: [
                        { type: 'NumericLiteral', value: 5 },
                        { type: 'NumericLiteral', value: 4 },
                    ],
                },
            ],
        };

        expect(toJavascript(ast)).toBe('add(2, 3, subtract(5, 4))');
    });

    it('should support variables', () => {
        const ast = {
            type: 'VariableDeclaration',
            identifier: {type: "Identifier", name: "x"},
            assignment: {type: "NumericLiteral", value: 2},
        }

        expect(toJavascript(ast)).toBe('let x = 2;');
    });
});