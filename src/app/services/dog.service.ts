import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "../model/dog.model";

const BASE_URL: string = "https://api.petfinder.com/v2";

@Injectable()
export class DogService {

  token: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getDogById(id: number) {
    return this.http.get<Dog>(`${BASE_URL}/animals/${id}`);
  }

  createDog(dog: Dog) {
    return this.http.post(`${BASE_URL}/animals`, dog);
  }

  updateDog(dog: Dog) {
    return this.http.put(`${BASE_URL}/animals/${dog.id}`, dog);
  }

  deleteDog(id) {
    return this.http.delete(`${BASE_URL}/animals/${id}`);
  }
}
