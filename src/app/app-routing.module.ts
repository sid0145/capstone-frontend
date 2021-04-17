import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { BaseComponent } from "./components/base/base.component";
import { DevelopersPageComponent } from "./components/developers-page/developers-page.component";
import { HirePageComponent } from "./components/hire-page/hire-page.component";
import { HomeComponent } from "./components/home/home.component";
import { JobsPageComponent } from "./components/jobs-page/jobs-page.component";
import { OutstoryComponent } from "./static-pages/outstory/outstory.component";
import { AngularDeveopersComponent } from "./components/pages/angular-deveopers/angular-deveopers.component";
import { DevelopersDetailPageComponent } from "./components/pages/developers-detail-page/developers-detail-page.component";
import { JavaDeveopersComponent } from "./components/pages/java-deveopers/java-deveopers.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { TeamDetailsComponent } from "./static-pages/team-details/team-details.component";

import { UsPageComponent } from "./static-pages/us-page/us-page.component";
import { AuthGuard } from "./services/auth/auth.guard";
import { TermsComponent } from "./static-pages/terms/terms.component";
import { AdminGuard } from "./admin-landing-page/admin.guard";
import { LatestProjectsPageComponent } from "./components/projects/latest-projects-page/latest-projects-page.component";
import { UploadProjectPageComponent } from "./components/projects/upload-project-page/upload-project-page.component";
import { EditProjectComponent } from "./components/projects/edit-project/edit-project.component";
import { ViewProjectComponent } from "./components/projects/view-project/view-project.component";
import { CartComponent } from "./components/projects/cart/cart.component";

const routes: Routes = [
  { path: "dashboard", component: HomeComponent },

  //***************details page */
  { path: "ourStory", component: OutstoryComponent },
  { path: "team-detail-page", component: TeamDetailsComponent },
  { path: "us-page", component: UsPageComponent },
  { path: "terms", component: TermsComponent },

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
  {
    path: "latest-projects",
    component: LatestProjectsPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "upload-project",
    component: UploadProjectPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "project-request-page",
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "latest-projects/view-project/:id",
    component: ViewProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-project/:id",
    component: EditProjectComponent,
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
  },
  {
    path: "java-developers",
    component: JavaDeveopersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "hire-me/:id",
    component: HirePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "developer-detail-page/:id",
    component: DevelopersDetailPageComponent,
    canActivate: [AuthGuard],
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
  providers: [AuthGuard],
})
export class AppRoutingModule {}
