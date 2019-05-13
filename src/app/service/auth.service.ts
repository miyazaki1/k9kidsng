import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment, BASE_URL } from "src/environments/environment";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable <any> {
    return this.http
      .post<any>(BASE_URL + environment.account.login, {
        username: username,
        password: password
      })
  }
}
