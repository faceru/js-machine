export class StateMachine {
    constructor(name, rules, priority){
        this.prevState = {name: 'begin'}
        this.state = {name: 'begin'}
        this.rules = rules
        this.name = name
        this.priority = priority
    }

    inputChar(str){
        this.prevState = this.state;
        if (this.state) {
            this.state = this.rules[this.state.name](str)
        }
    }
    
    resetState(){
        this.prevState = {name: 'begin'}
        this.state = {name: 'begin'}
    }
}