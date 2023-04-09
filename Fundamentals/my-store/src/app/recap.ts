const username: string | number = 'leovortex';
const sum = (a: number, b: number) =>{
    return a + b;
}

const data = [
    {name: 'leo'},
    {name: 'vortex'},
    {name: 'sofi'},
    {name: 'luna'}
]

// v is the value of the array and the map creates a new array with the values of the name property
const a = data.map(function(v){  
    return v.name;
})

// the same as above but using arrow function
const b = data.map(v => v.name);

//initialize class called Person with two properties age and name
class Person {
    age: number;
    name: string;

    constructor(age: number, name: string){
        this.age = age;
        this.name = name;
    }
}
//Create a new instance of the class Person
const leo = new Person(30, 'leo');