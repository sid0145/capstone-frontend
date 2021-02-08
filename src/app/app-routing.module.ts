import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { DemoPageComponent } from "./components/demo-page/demo-page.component";
import { HomeComponent } from "./components/home/home.component";
import { OutstoryComponent } from "./components/outstory/outstory.component";
import { AngularDeveopersComponent } from "./components/pages/angular-deveopers/angular-deveopers.component";
import { DevelopersDetailPageComponent } from "./components/pages/developers-detail-page/developers-detail-page.component";
import { JavaDeveopersComponent } from "./components/pages/java-deveopers/java-deveopers.component";
import { TeamDetailsComponent } from "./components/team-details/team-details.component";

import { AdminLandingPageModule } from "./admin-landing-page/admin-landing-page.module";

const routes: Routes = [
  { path: "dashboard", component: HomeComponent },

  //***************details page */
  { path: "ourStory", component: OutstoryComponent },
  { path: "team-detail-page", component: TeamDetailsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "demo", component: DemoPageComponent },

  //*************************developer  */
  {
    path: "angular-developers",
    component: AngularDeveopersComponent,
  },
  {
    path: "java-developers",
    component: JavaDeveopersComponent,
  },
  {
    path: "developer-detail-page/:id",
    component: DevelopersDetailPageComponent,
  },

  //********************************admin page */
  {
    path: "admin/dashboard",
    loadChildren: () =>
      import("./admin-landing-page/admin-landing-page.module").then(
        (m) => m.AdminLandingPageModule
      ),
  },
  //**************************auth goes here */
  { path: "login", component: LoginComponent },
  { path: "resister", component: ResisterComponent },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
