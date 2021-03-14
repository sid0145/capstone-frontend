import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { BaseComponent } from "./components/base/base.component";
import { DevelopersPageComponent } from "./components/developers-page/developers-page.component";
import { HirePageComponent } from "./components/hire-page/hire-page.component";
import { HomeComponent } from "./components/home/home.component";
import { JobsPageComponent } from "./components/jobs-page/jobs-page.component";
import { OutstoryComponent } from "./components/outstory/outstory.component";
import { AngularDeveopersComponent } from "./components/pages/angular-deveopers/angular-deveopers.component";
import { DevelopersDetailPageComponent } from "./components/pages/developers-detail-page/developers-detail-page.component";
import { JavaDeveopersComponent } from "./components/pages/java-deveopers/java-deveopers.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { TeamDetailsComponent } from "./components/team-details/team-details.component";

import { UsPageComponent } from "./components/us-page/us-page.component";
import { AdminGuard } from "./services/auth/admin.guard";
import { AuthGuard } from "./services/auth/auth.guard";

const routes: Routes = [
  { path: "dashboard", component: HomeComponent },

  //***************details page */
  { path: "ourStory", component: OutstoryComponent },
  { path: "team-detail-page", component: TeamDetailsComponent },
  { path: "us-page", component: UsPageComponent },

  //****************************page for distribute the client or developer  */
  {
    path: "base",
    component: BaseComponent,
  },

  //**********************services page */
  {
    path: "developers-page",
    component: DevelopersPageComponent,
    canActivate: [AuthGuard],
  },
  //*******************products */
  {
    path: "products",
    component: ProductsPageComponent,
  },

  //********************jobs page */
  {
    path: "current-opening",
    component: JobsPageComponent,
  },
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
    path: "hire-me/:id",
    component: HirePageComponent,
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
    canActivate: [AuthGuard],
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
  providers: [AuthGuard, AdminGuard],
})
export class AppRoutingModule {}
