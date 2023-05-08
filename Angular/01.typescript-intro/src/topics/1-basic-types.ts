// BASIC TYPES FOR TYPESCRIPT

const name: string = 'Leo';
let hpPoints: number | 'FULL' = 95; //The pipe allows to use more than one type
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
});


export{};