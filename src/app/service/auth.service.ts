import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable <any> {
    return this.http
      .post<any>("http://localhost:8088/brooks/account/login", {
        username: username,
        password: password
      })
      // .pipe(
      //   map(user => {
      //     // login successful if there's a jwt token in the response
      //     if (user && user.token) {
      //       // store user details and jwt token in local storage to keep user logged in between page refreshes
      //       localStorage.setItem("currentUser", JSON.stringify(user));
      //     }

      //     return user;
      //   })
      // );
  }
}
