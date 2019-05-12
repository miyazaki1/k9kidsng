import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register/register.component";
import { LoginComponent } from "./login/login/login.component";
import { AddDogComponent } from "./add-dog/add-dog/add-dog.component";
import { EditDogComponent } from "./edit-dog/edit-dog/edit-dog.component";
import { ListDogComponent } from "./list-dog/list-dog.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "add-dog", component: AddDogComponent },
  { path: "edit-dog", component: EditDogComponent },
  { path: "list-dog", component: ListDogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
