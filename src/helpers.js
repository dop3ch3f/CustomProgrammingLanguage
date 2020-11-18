const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

const isLetter = c => LETTER.test(c);

const isWhitespace = c => WHITESPACE.test(c);

const isNumber = c => NUMBER.test(c);

const isOpeningParenthesis = c => c === "(";

const isClosingParenthesis = c => c === ")";

const isParenthesis = c => isClosingParenthesis(c) || isOpeningParenthesis(c);

const isQuote = c => c === '"';

const isOperator = c => OPERATORS.includes(c);

module.exports = {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote,
    isOperator,
    isOpeningParenthesis,
    isClosingParenthesis
};