import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "../model/dog.model";

const BASE_URL = "https://api.petfinder.com/v2";
const CLIENT_ID = "Cstk7ayhA5di3IfCcSykTlC2JtEtHRieCXO6mSteTjAR1oHc5k";
const CLIENT_SECRET = "Q0s1TZMkRGDuc75tOWskj9v3pPLcloGns5jO8Xr2";

@Injectable()
export class PetfinderService {
  isLoading: boolean;
  token: string;

  headers: HttpHeaders;

  breeds: any;

  constructor(private http: HttpClient) {
    this.http
      .post(`${BASE_URL}/oauth2/token`, {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      })
      .subscribe((res: any) => {
        this.token = res.access_token;
      });
  }

  setAuthorizationHeader() {
    this.headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("authorization", "Bearer " + this.token);
  }

  getDogs() {
    this.setAuthorizationHeader();
    return this.http.get<Dog[]>(`${BASE_URL}/animals`);
  }

  getBreeds() {
    this.setAuthorizationHeader();
    return this.http.get<Dog[]>(`${BASE_URL}/types/dog/breeds`, {
      headers: this.headers
    });
  }

  getDogsByBreed(breed: string) {
    this.setAuthorizationHeader();
    return this.http.get<Dog[]>(`${BASE_URL}/animals?breed=${breed}`);
  }
}
