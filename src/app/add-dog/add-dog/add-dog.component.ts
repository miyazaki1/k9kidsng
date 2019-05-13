import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DogService } from "../../service/dog.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Dog } from "src/app/model/dog.model";
import { PetfinderService } from "src/app/service/petfinder.service";

@Component({
  selector: "app-add-dog",
  templateUrl: "./add-dog.component.html",
  styleUrls: ["./add-dog.component.scss"]
})
export class AddDogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dogService: DogService,
    private petFinderService: PetfinderService
  ) {}

  dogs: Dog[];
  addForm: FormGroup;
  breeds: any[];
  selectedBreed: string;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });

    this.getDogBreeds();
  }

  onSubmit() {
    this.dogService.createFavorites(this.addForm.value).subscribe(data => {
      this.petFinderService.getDogs().subscribe(data => {
        this.dogs = data;
        console.log("Result", this.dogs);
      });
      this.router.navigate(["list-dog"]);
    });
  }

  getDogBreeds() {
    this.petFinderService.isLoading = true;
    this.petFinderService.getBreeds().subscribe(
      (data: any) => {
        this.petFinderService.isLoading = false;
        console.log(data);
        this.breeds = data.breeds;
        console.log(this.dogs);
      },
      error => {
        this.petFinderService.isLoading = false;
      }
    );
  }
}
