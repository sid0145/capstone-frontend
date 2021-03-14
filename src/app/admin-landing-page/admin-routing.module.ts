import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../services/auth/admin.guard";
import { AuthGuard } from "../services/auth/auth.guard";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
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

    children: [
      {
        path: "main",
        component: DashboardComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "developers",
        component: DevelopersComponent,
      },
      {
        path: "requests",
        component: RequestComponent,
      },
      {
        path: "angular-developer",
        component: AngularDeveloperComponent,
      },
      {
        path: "angular-developer/new",
        component: AddDeveloperComponent,
      },
      {
        path: "projects",
        component: ProjectComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard],
})
export class AdminRoutingModule {}
