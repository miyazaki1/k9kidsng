import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./components/register/register/register.component";
import { LoginComponent } from "./components/login/login/login.component";
import { AddDogComponent } from "./components/add-dog/add-dog/add-dog.component";
import { EditDogComponent } from "./components/edit-dog/edit-dog/edit-dog.component";
import { ListDogComponent } from "./components/list-dog/list-dog.component";
import { DogService } from "./services/dog.service";
import { AuthenticationService } from "./services/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PetfinderService } from "./services/petfinder.service";
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
