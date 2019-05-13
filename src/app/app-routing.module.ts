import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register/register.component";
import { LoginComponent } from "./login/login/login.component";
import { AddDogComponent } from "./add-dog/add-dog/add-dog.component";
import { EditDogComponent } from "./edit-dog/edit-dog/edit-dog.component";
import { ListDogComponent } from "./list-dog/list-dog.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "register", component: RegisterComponent },   // Register Account
  { path: "login", component: LoginComponent },         // Login
  { path: "add-dog", component: AddDogComponent },      // Add Favorite Dog
  { path: "edit-dog", component: EditDogComponent },    // Remove Favorite Dog
  { path: "list-dog", component: ListDogComponent },    // Get All Favorites
  { path: "profile", component: ProfileComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
