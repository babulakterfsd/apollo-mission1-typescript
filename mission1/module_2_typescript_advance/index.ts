type Man = {
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

