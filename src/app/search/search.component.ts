import { DogService } from 'src/app/service/dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/model/dog.model'
import { Breed } from 'src/app/model/breed.model';
import { Category } from 'src/app/model/category.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DogService]
})
export class SearchComponent{

  constructor(private dogService: DogService) { }

    searchStr: string;
    searchRes: Dog[];

    selectedDog: string;
    selectedBreed: string[] = new Array();
    dogPreference: Breed[]

    ngOnInit() {
      this.dogService.getFavoritesByUsername(sessionStorage.currentUser).subscribe((listOfBreeds)=>{
        this.dogPreference = listOfBreeds;
        this.dogPreference.forEach(listOfBreeds => {
          this.selectedBreed.push(listOfBreeds.id);
        });
        sessionStorage.breeds = JSON.stringify(this.selectedBreed);
      });
    }

    searchBreedByName() {
      this.dogService.getBreedInfoByName(this.searchStr)
      .subscribe((res) => {
        //this.searchRes =  res.searchStr;
        console.log(this.searchRes);

      })
    }

    selectGenre(event){
      console.log("click triggered");
      // console.log(event.srcElement.id);
      if (event.srcElement.id == 'fake-link'){
        event.srcElement.id = 'highlighted-link';
        if(this.selectedGenres.indexOf(event.explicitOriginalTarget.data) == -1){
          console.log("genre not found. adding to array");
          if(this.selectedGenres.indexOf(null) == -1){
            this.selectedGenres.push(event.explicitOriginalTarget.data);
          } else {
            this.selectedGenres.splice(this.selectedGenres.indexOf(null), 1, event.explicitOriginalTarget.data);
          }
          console.log(this.selectedGenres);
        }
      } else {
        event.srcElement.id = 'fake-link';
        if(this.selectedGenres.indexOf(event.explicitOriginalTarget.data) != -1) {
          console.log("before: ");
          console.log(this.selectedGenres);
          this.selectedGenres.splice(this.selectedGenres.indexOf(event.explicitOriginalTarget.data), 1, null);
          console.log("after: ");
          console.log(this.selectedGenres);
        }
      }
      // console.log(event.explicitOriginalTarget.data);
      this.updateGenreSession();
    }

    removeBreed(event){
      console.log(event);
      console.log(event.srcElement.parentElement.id);
      this.dogPreference.splice(this.dogPreference.indexOf(event.srcElement.parentElement.id), 1, null);
      this.updateGenreSession();  
      this.dogService.deleteFavorites(this.dogPreference)
    }

    updateGenreSession(){
      sessionStorage.breeds = JSON.stringify(this.selectedBreed);
    }
}
