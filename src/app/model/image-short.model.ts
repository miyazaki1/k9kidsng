import { Category } from './category.model';
import { Breed } from './breed.model';

export class ImageShort{
    id:string;
    url:string;
    categories:Category[];
    breeds:Breed[];
}