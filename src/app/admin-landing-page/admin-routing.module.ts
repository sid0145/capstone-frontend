import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../services/auth/auth.guard";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminGuard } from "./admin.guard";
import { AddDeveloperComponent } from "./pages/add-developer/add-developer.component";
import { AngularDeveloperComponent } from "./pages/angular-developer/angular-developer.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DevelopersComponent } from "./pages/developers/developers.component";
import { ProjectComponent } from "./pages/project/project.component";
import { RequestComponent } from "./pages/request/request.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: "main",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "users",
        component: UsersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "developers",
        component: DevelopersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "requests",
        component: RequestComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "angular-developer",
        component: AngularDeveloperComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "angular-developer/new",
        component: AddDeveloperComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "projects",
        component: ProjectComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminRoutingModule {}
