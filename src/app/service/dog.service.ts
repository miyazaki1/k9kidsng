import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Breed } from "../model/breed.model";
import { environment, BASE_URL} from "src/environments/environment";

//const BASE_URL = `http://localhost:8088/brooks/`;

@Injectable()
export class DogService { 

  token: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getFavoritesByUsername(username: string) {
    return this.http.get<any>(BASE_URL + environment.account.fav + username);
  }

  createFavorites(breed: Breed) {
    return this.http.post<Breed>(BASE_URL + environment.account.favAdd, breed);
  }

  deleteFavorites(breed: Breed) {
    return this.http.post<any>(BASE_URL + environment.account.favDelete, breed);
  }

  getAllBreeds() {
    return this.http.get(BASE_URL + environment.account.allBreeds);
  }

  getBreedInfoById(breed_id: number) {
    return this.http.get(BASE_URL + environment.account.breedInfo + breed_id);
  }

  getBreedInfoByName(breed_name: string){
    return this.http.get(BASE_URL + environment.account.breedInfoName + breed_name);
  }

  getImageIdByBreed(breed_id: number) {
    return this.http.get(BASE_URL + environment.account.images + breed_id);
  }

}
