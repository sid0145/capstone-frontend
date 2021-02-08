import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
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
        path: "projects",
        component: ProjectComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
