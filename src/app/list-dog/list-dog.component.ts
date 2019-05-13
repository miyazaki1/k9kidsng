import { Component, OnInit } from "@angular/core";
import { DogService } from "../service/dog.service";
import { PetfinderService } from '../service/petfinder.service'
import { Dog } from "../model/dog.model";
import { Router } from "@angular/router";
import { element } from "@angular/core/src/render3";
import { HttpClient } from '@angular/common/http';
import { Breed } from '../model/breed.model';
import { ImageShort } from '../model/image-short.model';
import { stringify } from '@angular/core/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: "app-list-dog",
  templateUrl: "./list-dog.component.html",
  styleUrls: ["./list-dog.component.scss"]
})
export class ListDogComponent implements OnInit {
  username: string;
  dogs: Dog[];
  public breeds: Breed[];
  image:ImageShort;;

  constructor(private http: HttpClient, private dogService: DogService, private petFinderService: PetfinderService) { }
 
  ngOnInit() {
  }

  fetchData() {
    console.log("Fetching Data");
    let username: string = ((document.getElementById("username") as HTMLInputElement).value);
    const url:string = "http://localhost:8088/brooks/account/breeds/user?username=" + username;

    this.http.get(url).subscribe(
      data => {
        this.breeds =[];
        console.log(data);
        for (let index in data) {


          if (data[index] != null) {
            this.breeds.push(data[index]);
          }

          console.log(this.breeds);
        }
      }, error => {
        console.log("Doggos did not populate gracefully...");
      }
    )
  }



  fetchImage(id:number){
    console.log("Fetching Image");
    

    this.http.get("http://localhost:8088/account/images?breed_id=" + id.toString()).subscribe(
      data =>{
       
       // this.image = null;
        console.log(data);
        //this.image = data[0];
        //console.log(this.image);
      }, error =>{

        console.log("Did not find image gracefully");
      }
    )

  }

  getDogsDetails() {
    this.petFinderService.getBreeds().subscribe(data => {
      this.dogs = data;
    });
  }

  deleteDog(dogs: Dog, i) {
    this.dogService.deleteFavorite(dogs).subscribe(data => {
      this.dogs.splice(i, 1);
      // this.dogs = this.dogs.filter(element => element !== dogs);
      console.log(this.dogs, "After deletion");
    });
  }

  addDog(): Observable<any> {
    console.log("Posting Data");
    let userId: string = ((document.getElementById("userId") as HTMLInputElement).value);
    let breed_id: string = ((document.getElementById("breedId") as HTMLInputElement).value);

    const url:string = "http://localhost:8088/brooks/account/fav/add";


    const jsonBody:string = "{ 'id' : '9001','account_id' : '" + userId + "'," +
     " 'breed_id : '" + breed_id + "' }"
  
     console.log(JSON.stringify(jsonBody));
     
    return this.http
    .post<any>(url, JSON.stringify(jsonBody));
    
  }

  // editDog(dogs: Dog) {
  //   localStorage.removeItem("editDogId");
  //   localStorage.setItem("editDogId", dogs.id.toString());
  //   this.router.navigate(["edit-dog"]);
  // }

}
