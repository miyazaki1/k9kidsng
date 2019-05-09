import { Component, OnInit } from "@angular/core";
import { DogService } from "../../services/dog.service";
import {PetfinderService} from '../../services/petfinder.service'
import { Dog } from "../../model/dog.model";
import { Router } from "@angular/router";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "app-list-dog",
  templateUrl: "./list-dog.component.html",
  styleUrls: ["./list-dog.component.scss"]
})
export class ListDogComponent implements OnInit {

  dogs: Dog[];

  breed: string[];

  constructor(private router: Router, private dogService: DogService, private petFinderService: PetfinderService) {}

  ngOnInit() {
    this.getDogsDetails();
  }

  getDogsDetails() {
    this.petFinderService.getBreeds().subscribe(data => {
      this.dogs = data;
    });
  }

  deleteDog(dogs: Dog, i) {
    this.dogService.deleteDog(dogs.id).subscribe(data => {
      this.dogs.splice(i, 1);
      // this.dogs = this.dogs.filter(element => element !== dogs);
      console.log(this.dogs, "After deletion");
    });
  }

  editDog(dogs: Dog) {
    localStorage.removeItem("editDogId");
    localStorage.setItem("editDogId", dogs.id.toString());
    this.router.navigate(["edit-dog"]);
  }

  addDog(): void {
    this.router.navigate(["add-dog"]);
  }
}
