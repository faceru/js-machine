import { Machines } from './machines';
import { getActiveName, resetAllRules, replaceEkran, releaseFunc } from './utils';

export function prepareMachinesResult (string) {
    const allRules = [...Machines].sort((a, b) => a.priority > b.priority ? 1 : -1);

    const tokens = [] // Результирующий список токенов
    let charsCounter = 0 // счётчик символов в пределах одного токена
    for (let i = 0; i <= string.length; i++) {
        charsCounter++
        let hasActiveMachine = false
        allRules.forEach(machine => {
            
            machine.inputChar(string[i])
            if (machine.state) {
                hasActiveMachine = true
            }
            
            
        })
     
        if (!hasActiveMachine) {
            if (charsCounter > 1) {
                const str = replaceEkran(string.substring(i - charsCounter + 1, i));
                const tok = releaseFunc(getActiveName(allRules), str);
                tokens.push({
                    token: tok,
                    lexeme: str,
                    index:i
                })
                i--
            } else {
                const symbol = replaceEkran(string.substring(i, i + 1));
                tokens.push({
                    token: undefined,
                    lexeme: symbol,
                    index:i
                })
            }
            charsCounter = 0
            resetAllRules(allRules)
        }
    }
    console.log(string, tokens);
    return tokens;
}
 