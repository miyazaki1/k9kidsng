import { Component, OnInit } from "@angular/core";
import { DogService } from "../../../services/dog.service";
import { Router } from "@angular/router";
import { Dog } from "../../../model/dog.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-edit-dog",
  templateUrl: "./edit-dog.component.html",
  styleUrls: ["./edit-dog.component.css"]
})
export class EditDogComponent implements OnInit {
  dogs: Dog;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dogService: DogService
  ) {}

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.");
      this.router.navigate(["list-dog"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
    this.dogService.getDogById(+userId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.dogService
      .updateDog(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["list-dog"]);
        },
        error => {
          alert(error);
        }
      );
  }
}
