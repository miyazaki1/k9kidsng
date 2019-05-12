import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register/register.component";
import { LoginComponent } from "./login/login/login.component";
import { AddDogComponent } from "./add-dog/add-dog/add-dog.component";
import { EditDogComponent } from "./edit-dog/edit-dog/edit-dog.component";
import { ListDogComponent } from "./list-dog/list-dog.component";
import { DogService } from "./service/dog.service";
import { AuthenticationService } from "./service/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PetfinderService } from "./service/petfinder.service";
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddDogComponent,
    EditDogComponent,
    ListDogComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, DogService, PetfinderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
