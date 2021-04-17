import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppMaterialModule } from "../material.module";

import { UsersComponent } from "./pages/users/users.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { RequestComponent } from "./pages/request/request.component";
import { ProjectComponent } from "./pages/project/project.component";
import { DevelopersComponent } from "./pages/developers/developers.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ContactMessagesComponent } from "./pages/contact-messages/contact-messages.component";
import { AngularDeveloperComponent } from "./pages/angular-developer/angular-developer.component";
import { AddDeveloperComponent } from "./pages/add-developer/add-developer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminService } from "./admin.service";
import { HireRequestComponent } from './pages/hire-request/hire-request.component';
import { JavaDeveloperComponent } from './pages/java-developer/java-developer.component';
import { AdminViewProjectComponent } from './pages/admin-view-project/admin-view-project.component';

@NgModule({
  declarations: [
    UsersComponent,
    AdminDashboardComponent,
    RequestComponent,
    ProjectComponent,
    DevelopersComponent,
    DashboardComponent,
    ContactMessagesComponent,
    AngularDeveloperComponent,
    AddDeveloperComponent,
    HireRequestComponent,
    JavaDeveloperComponent,
    AdminViewProjectComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AdminDashboardComponent],
  providers: [AdminService],
})
export class AdminLandingPageModule {}
