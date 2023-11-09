### apollo-mission1-typescript

1. pc te manually na kore package er maddhome nodejs er version  change korar jonno ekta package use kora hoy , nvm naamer. eta diye package install kora jay, jekono package e change houa jay ittadi ittadi. module_2 er 2 number video te dekhano hoyeche.

2. ts-node-dev --respawn --transpile-only server.ts eta diye ts file watch mode e run kora hoyeche jeta ekoi sathe ts ke js e convert kortese + watch mode er karone live change gula dekhacche automatically. kintu tar aage ts node dev install korte hobe globally. eta diye ts file run kora jay. module_2 er 11 number video te dekhano hoyeche.

3. const tuppleAray : [number, boolean, string, boolean] = [1, true, 'abcd', false]; // tupple hocche emon ekta array jekhane data serial aage theke bole deya hoy oi array element er. oi serial na manle error dibe typescript

console.log(tuppleAray);

4. type Man = {
    name: string;
    location: string;
}

interface FullPersonality extends Man {
    hasWatch?: string;
    devType?: string;
}

//generic
const Awal = <T extends Man>(personality: T) : object => {
    const { name, location } = personality;
    return {
        height: 5.5,
        ...personality
    }
}

//generic
const Babul = <T extends Man>(personality: T) : FullPersonality => {
    const { name, location } = personality;
    return {
        name,
        location,
        
    }
}

console.log(Awal({ name: 'Awal', location: 'Dhaka' }));
console.log(Babul({ name: 'Babul', location: 'Dhunat' }));




type AreaNumber = {
    height: number;
    width: number;
}

//map type
type AreaString = {
    [key in keyof AreaNumber]: string;
}


const Student : Record<string, string> = {
    name: 'Awal',
    //age: 31, /* this will show error cause I have defined Student as Record<string, string */
}

// some utility types
// Partial - all properties are optional
// Required - all properties are required
// Readonly - all properties are readonly
// Pick - pick some properties from a type
// Omit - omit some properties from a type
// Record - create a type with specific keys and values

