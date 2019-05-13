import { Component, OnInit } from '@angular/core';
import {AccountService} from "src/app/service/account.service";
import {Account} from "src/app/model/account.model";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


  export class RegisterComponent implements OnInit {

    regForm: Account = {
      
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    }
  
    messageStyle: string;
    message: string;
    constructor(private accountService: AccountService) { }
  
    ngOnInit() {
    }
  
    creatAccount() {
      this.accountService.creatAccount(this.regForm).subscribe()
    }
  
  }



