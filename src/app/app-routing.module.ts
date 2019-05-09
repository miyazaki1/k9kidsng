import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./components/register/register/register.component";
import { LoginComponent } from "./components/login/login/login.component";
import { AddDogComponent } from "./components/add-dog/add-dog/add-dog.component";
import { EditDogComponent } from "./components/edit-dog/edit-dog/edit-dog.component";
import { ListDogComponent } from "./components/list-dog/list-dog.component";

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
