
let skills:string[] = ['Bash','Counter','Healing'];
// it's recommended to use the interface keyword to define the structure of an object

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}



const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);


export {}