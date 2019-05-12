import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDogComponent } from './list-dog.component';

//with testing
import {Dog} from '../model/dog.model';
import {OnInit} from '@angular/core';
import { DogService} from '../service/dog.service';


describe('ListDogComponent', () => {
  let component: ListDogComponent;
  let fixture: ComponentFixture<ListDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})

//testing
// export class DogComponent implements OnInit{

//   dogs: Dog[];
//   constructor(private dogService: DogService){}

//   ngOnInit(): void{
//       this.getAllDogs();
//   }

//   getAllDogs(): void{
//     this.dogService.getAllDogs()
//       .subscribe((dogData) => {
//         this.dogs = dogData,
//         console.log(dogData)
//       }, (error) =>{
//         console.log(error);
//       });
//   }
}