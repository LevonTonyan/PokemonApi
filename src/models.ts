export interface IPokemon { 
    name: string,
    url:string
}


interface Abilitie { 
    name: string,
    url:string
}

interface Abilities { 
    ability:Abilitie[],
    is_hidden: boolean,
    slot:number
}



export interface SinglePokemon { 
    abilities: Abilities[],
    base_experience: number,
    height: number,
    is_default: boolean,
    name: string,
    order: number,
    weight: number,
    sprites:any
}