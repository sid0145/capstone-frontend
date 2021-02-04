import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { DemoPageComponent } from "./components/demo-page/demo-page.component";
import { HomeComponent } from "./components/home/home.component";
import { OutstoryComponent } from "./components/outstory/outstory.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "ourStory", component: OutstoryComponent },
  { path: "demo", component: DemoPageComponent },
  { path: "login", component: LoginComponent },
  { path: "resister", component: ResisterComponent },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
