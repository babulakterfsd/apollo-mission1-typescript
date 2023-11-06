type Man = {
    name: string;
    age: number;
}

type FullPersonality = {
    name: string;
    age: number;
    height?: number;
    weight?: number;
    hasWatch?: string;
    devType?: string;
}

const Awal = <T extends Man>(personality: T) : object => {
    const { name, age } = personality;
    return {
        height: 5.5,
        ...personality
    }
}
const Babul = <T extends Man>(personality: T) : FullPersonality => {
    const { name, age } = personality;
    return {
        name,
        age,
        weight: 84,
    }
}

console.log(Awal({ name: "Awal", age: 25, hasComputer: true }));
console.log(Babul({ name: "Babul", age: 31 }));
