import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "../model/dog.model";

const BASE_URL = `http://localhost:8088/brooks/`;

@Injectable()
export class DogService {

  token: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getDogByUsername(id: string) {
    return this.http.get<Dog>(`${BASE_URL}/account/${id}`);
  }

  createDog(dog: Dog) {
    return this.http.post(`${BASE_URL}/account`, dog);
  }

  updateDog(dog: Dog, id: Dog) {
    return this.http.put(`${BASE_URL}/account/${id}`, dog);
  }

  deleteDog(id: Dog) {
    return this.http.delete(`${BASE_URL}/account/${id}`);
  }

  getAccountByUsername(id: string) {
    return this.http.get<Account>(`${BASE_URL}/account/${id}`);
  }

  creatAccount(account: Account) {
    return this.http.post(`${BASE_URL}/account`, account);
  }

  updateAccount(id: String, account: Account) {
    return this.http.put(`${BASE_URL}/account/${id}`, account);
  }

  deleteAccount(id: String) {
    return this.http.delete(`${BASE_URL}/account/${id}`);
  }

}
