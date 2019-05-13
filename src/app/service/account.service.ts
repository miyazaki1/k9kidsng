import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "../model/account.model";
import { environment, BASE_URL} from "src/environments/environment";

//const BASE_URL = `http://localhost:8088/brooks/`;

@Injectable()
export class AccountService { 

  token: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getAccountByUsername(username: string) {
    return this.http.get<Account>(BASE_URL + environment.account.byUsername + username);
  }

  getAccountById(id: number){
      return this.http.get<Account>(BASE_URL + environment.account.byId + "?id=" + id)
  }

  createAccount(account: Account) {
    return this.http.post(BASE_URL + environment.account.register, account);
  }

  updateAccount(username: String, account: Account) {
    return this.http.put(BASE_URL + environment.account.update + username, account);
  }

  deleteAccount(username: String) {
    return this.http.delete(BASE_URL + environment.account.delete + username);
  }

}
