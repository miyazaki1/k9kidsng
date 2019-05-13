import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "../model/dog.model";
import { environment, BASE_URL} from "src/environments/environment";

//const BASE_URL = `http://localhost:8088/brooks/`;

@Injectable()
export class DogService { 

  token: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getFavoritesByUsername(username: string) {
    return this.http.get<Dog>(BASE_URL + environment.account.fav + username);
  }

  createFavorites(dog:Dog) {
    return this.http.post<Dog>(BASE_URL + environment.account.favAdd, dog);
  }

  deleteFavorites(dog: Dog) {
    return this.http.post<Dog>(BASE_URL + environment.account.favDelete, dog);
  }

}
