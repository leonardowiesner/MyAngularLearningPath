function addnumbers(a:number, b:number){
    return a+b;
}

const arrowaddnumbers = (a:number, b:number) => {
    return `${ a + b }`;
}

function multiply ( firstNumber: number, secondNumber?: number, base: number = 2 ): number {
    return firstNumber * base;
}



// const result:number= addnumbers(1,2);
// const result2: string = arrowaddnumbers(1,2);
// const multiplyresult: number = multiply(10);
// console.table({result, result2,multiplyresult});


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}

const strider = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(strider, 20);
healCharacter(strider, 20);


strider.showHp();

export {};