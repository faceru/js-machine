import { StateMachine } from './StateMachine';
import { dictionaries } from './dictionaries';

const {
    symbols,
    alphUpperString,
    alphString,
    appropriation,
    numbersString,
} = dictionaries;

export const symbolMachine = new StateMachine('symbol', {
    begin: char => {
        if (symbols.indexOf(char) >= 0 ) {
            return {name: 'end'}
        }
    },
    end: () => undefined,
}, 1)

export const appropriationMachine = new StateMachine('appropriation', {
    begin: char => {
        if (appropriation.indexOf(char) >= 0 ) {
            return {name: 'begin'}
        }
    },
    end: () => undefined,
}, 50)

export const identifierMachine = new StateMachine('identifier', {
    begin: char => {
        if (alphUpperString.indexOf(char) >= 0 || alphString.indexOf(char) >= 0 || char === '_' ) {
            return {name: 'next'}
        }
    },
    next: char => {
        if (
            alphUpperString.indexOf(char) >= 0 || 
            alphString.indexOf(char) >= 0 || 
            numbersString.indexOf(char) >= 0 ||
            char === '_' ||
            char === '-' 
        ) {
            return {name: 'next'}
        }
    }
}, 6)

export const stringMachine = new StateMachine('str', {
    begin: char => {
        if( char === '"'){
            return {name: 'char', notEnd: true}
        }else if(char === "'") {
            return {name: 'char2', notEnd: true}
        }
    },
    char: (char) => {
        if(char !== '"') {
            return {name: 'char', notEnd: true}
        }else{
            return {name: 'end'}
        }
    },
    char2: (char) => {
        if(char !== "'") {
            return {name: 'char2', notEnd: true}
        }else{
            return {name: 'end'}
        }
    },
    end: () => undefined
}, 2)

export const spaceMachine = new StateMachine('spaces', {
    begin: char => {
        if (char === ' ' || char === '\n' || char === '\t') {
            return {name: 'end'}
        }
    },
    end: () => undefined
}, 3)
export const breakerMachine = new StateMachine('breaker', {
    begin: char => {
        if (char === ';') {
            return {name: 'end'}
        }
    },
    end: () => undefined
}, 4)
 
export const numberMachine = new StateMachine('number', {
    begin: char => {
        if (numbersString.indexOf(char) >= 0) {
            return {name: 'begin'}
        }else if (char === '.'){
            return {name: 'float', notEnd: true}
        }        
    },
    float: char => {
        if (numbersString.indexOf(char) >= 0) {
            return {name: 'float'}
        }
    },
}, 5)
 


export const Machines = [
    identifierMachine,
    stringMachine,
    spaceMachine,
    numberMachine,
    appropriationMachine,
    breakerMachine,
    symbolMachine,
]