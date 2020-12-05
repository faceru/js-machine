import {prepareMachinesResult} from './machine/prepareResult';

const lastbreaker = (index) => ({
  index: index,
  lexeme: '',
  token: undefined,
})


let testNumber = 1;
const prepareTests = (string, result) => {
  test(`prepareResult test ${testNumber}`, () => {
    expect(prepareMachinesResult(string)).toEqual([...result, lastbreaker(string.length)]);
  })
  testNumber++;
}


const tests = [
  {
    string: 'const num = 5;',
    result: [
      {token: "key", lexeme: "const", index: 5},
      {token: "spaces", lexeme: "\" \"", index: 6},
      {token: "identifier", lexeme: "num", index: 9},
      {token: "spaces", lexeme: "\" \"", index: 10},
      {token: "appropriation", lexeme: "=", index: 11},
      {token: "spaces", lexeme:"\" \"", index: 12},
      {token: "number", lexeme: "5", index: 13},
      {token: "breaker", lexeme: ";", index: 14},
    ]
  },
  {
    string: 'class test {\n constructor(name) {\n   this.name = name;\n }\n}',
    result: [
      {token: "key", lexeme: "class", index: 5},
      {token: "spaces", lexeme: "\" \"", index: 6},
      {token: "identifier", lexeme: "test", index: 10},
      {token: "spaces", lexeme: "\" \"", index: 11},
      {token: "symbol", lexeme: "{", index: 12},
      {token: "spaces", lexeme: "\\n", index: 13},
      {token: "spaces", lexeme: "\" \"", index: 14},
      {token: "key", lexeme: "constructor", index: 25},
      {token: "symbol", lexeme: "(", index: 26},
      {token: "identifier", lexeme: "name", index: 30},
      {token: "symbol", lexeme: ")", index: 31},
      {token: "spaces", lexeme: "\" \"", index: 32},
      {token: "symbol", lexeme: "{", index: 33},
      {token: "spaces", lexeme: "\\n", index: 34},
      {token: "spaces", lexeme: "\" \"", index: 35},
      {token: "spaces", lexeme: "\" \"", index: 36},
      {token: "spaces", lexeme: "\" \"", index: 37},
      {token: "key", lexeme: "this", index: 41},
      {token: "symbol", lexeme: ".", index: 42},
      {token: "identifier", lexeme: "name", index: 46},
      {token: "spaces", lexeme: "\" \"", index: 47},
      {token: "appropriation", lexeme: "=", index: 48},
      {token: "spaces", lexeme: "\" \"", index: 49},
      {token: "identifier", lexeme: "name", index: 53},
      {token: "breaker", lexeme: ";", index: 54},
      {token: "spaces", lexeme: "\\n", index: 55},
      {token: "spaces", lexeme: "\" \"", index: 56},
      {token: "symbol", lexeme: "}", index: 57},
      {token: "spaces", lexeme: "\\n", index: 58},
      {token: "symbol", lexeme: "}", index: 59},
    ]
  },
  {
    string: 'let string = "123213qwe/%";',
    result: [
      {token: "key", lexeme: "let", index: 3},
      {token: "spaces", lexeme: "\" \"", index: 4},
      {token: "identifier", lexeme: "string", index: 10},
      {token: "spaces", lexeme: "\" \"", index: 11},
      {token: "appropriation", lexeme: "=", index: 12},
      {token: "spaces", lexeme: "\" \"", index: 13},
      {token: "str", lexeme: "\"123213qwe/%\"", index: 26},
      {token: "breaker", lexeme: ";", index: 27}
    ]
  },
  {
    string: 'if(a &&? b){\n a+=b;\n}',
    result: [
      {token: "key", lexeme: "if", index: 2},
      {token: "symbol", lexeme: "(", index: 3},
      {token: "identifier", lexeme: "a", index: 4},
      {token: "spaces", lexeme: "\" \"", index: 5},
      {token: undefined, lexeme: "&&?", index: 8},
      {token: "spaces", lexeme: "\" \"", index: 9},
      {token: "identifier", lexeme: "b", index: 10},
      {token: "symbol", lexeme: ")", index: 11},
      {token: "symbol", lexeme: "{", index: 12},
      {token: "spaces", lexeme: "\\n", index: 13},
      {token: "spaces", lexeme: "\" \"", index: 14},
      {token: "identifier", lexeme: "a", index: 15},
      {token: "appropriation", lexeme: "+=", index: 17},
      {token: "identifier", lexeme: "b", index: 18},
      {token: "breaker", lexeme: ";", index: 19},
      {token: "spaces", lexeme: "\\n", index: 20},
      {token: "symbol", lexeme: "}", index: 21}
    ]
  }
]

tests.forEach( item => {
  const {string, result} = item;
  prepareTests(string, result);
})