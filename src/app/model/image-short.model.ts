import { Category } from './category.model';
import { Breed } from './breed.model';

export class ImageShort{
    id:string;
    url:string;
    categories:Category[];
    breeds:Breed[];

    constructor(id:string, url:string, categories:Category[], breeds:Breed[]){
        this.id = id;
        this.url = url;
        this.categories = categories;
        this.breeds = breeds;
    }
}