import { Weight } from './weight.model';
import { Height } from './height.model';

export class Breed{
    id:string;
    name:string;
    temperament:string;
    life_span:string;
    alt_names:string;
    wikipedia_url:string;
    origin:string;
    weight:Weight;
    height:Height;

    constructor(id:string,name:string,temperament:string,
        life_span:string,alt_names:string, wikipedia_url:string,
        origin:string, weight:Weight,height:Height){
            this.id = id;
            this.name = name;
            this.temperament = temperament;
            this.life_span = life_span;
            this.alt_names = alt_names;
            this.wikipedia_url = wikipedia_url;
            this.origin = origin;
            this.weight = weight;
            this.height = height;
        }
}