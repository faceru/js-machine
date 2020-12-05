
import { dictionaries } from './dictionaries';
const {languageKeys, literals, appropriationCombo} = dictionaries;
export function getActiveName(machinesList) {
    for (let i = 0; i < machinesList.length; i++) {
        if (machinesList[i].prevState && !machinesList[i].prevState.notEnd) {
            return machinesList[i].name
        }
    }
}
 
export function resetAllRules(machinesList) {
    machinesList.forEach(item => {
        item.resetState()
    })
}

export function replaceEkran (str) {
    switch(str) {
        case '\n':
            return '\\n'
        case ' ':
            return '" "'
        case '\t':
            return '\\t'
        default:
            return str;
    }
} 

export const releaseFunc = (actualName, lexeme) => {
    switch(actualName){
        case 'identifier':
            if(languageKeys.indexOf(lexeme) >= 0) {
                return 'key';
            } else if (literals.indexOf(lexeme) >= 0){
                return 'literal'; 
            } else {
                return actualName;
            }
        case 'appropriation':
            if(appropriationCombo.indexOf(lexeme) >= 0){
                return actualName
            }else{
                return undefined
            }
        default: 
            return actualName;
    }

    
};