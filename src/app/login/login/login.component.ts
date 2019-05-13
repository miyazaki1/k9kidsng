import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  MinLengthValidator
} from "@angular/forms";

import {AuthenticationService} from "src/app/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  validationMessages = {
    username: [
      // { type: "required", message: "Email is required." },
      // {
      //   type: "minlength",
      //   message: "Email must be at least 5 characters long."
      // },
      // {
      //   type: "maxlength",
      //   message: "Email cannot be more than 25 characters long."
      // },
      // {
      //   type: "pattern",
      //   message: "Email must contain @ and . character"
      // }
    ],

    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 8 characters long."
      },
      {
        type: "maxlength",
        message: "Password cannot be more than 12 characters long."
      },
      {
        type: "pattern",
        message:
          "Password must contain at least one upper case English letter, one lower case English letter, one digit, one special character."
      }
    ]
  };

  //emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\[\]"\';:_\-<>\., =\+\/\\]).{8,}$/;
  // numberAndcharacterPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {}

  register() {
    this.router.navigate(["/register"]);
  }
  onSubmit() {
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // if (
    //   this.loginForm.controls.email.value == "neelpat29@gmail.com" &&
    //   this.loginForm.controls.password.value == "Brooks@99"
    // ) {
    //   this.router.navigate(["add-dog"]);
    // } else {
    //   this.invalidLogin = true;
    // }

    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
      success => {
        console.log("Successful response sent from server: " + success.token);

        sessionStorage.setItem("currentUser", success.token);

        this.router.navigate(["/list-dog"])
      },
      error => {
        console.log("Error response sent from server: " + error.message);
      }
    )
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        ""
        // "neelpat29@gmail.com",
        // Validators.compose([
        //   Validators.minLength(5),
        //   Validators.maxLength(25),
        //   Validators.pattern(this.emailPattern),
        //   // Validators.pattern(this.numberAndcharacterPattern),
        //   Validators.required
        // ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern(this.passwordPattern),
          Validators.required
        ])
      ]
    });
  }

}
