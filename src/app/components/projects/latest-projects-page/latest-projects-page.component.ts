import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-latest-projects-page",
  templateUrl: "./latest-projects-page.component.html",
  styleUrls: ["./latest-projects-page.component.css"],
})
export class LatestProjectsPageComponent implements OnInit {
  projects: Project[] = [];
  isLoading = false;
  userId: string;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.userId = this.authService.getUserId();
    this.projectService.getProjects().subscribe((projects: [Project]) => {
      this.isLoading = false;
      this.projects = projects;

      this.userId = this.authService.getUserId();
    });
  }

  //****************view a project */

  viewProject(id: string) {
    this.router.navigate(["latest-projects", "view-project", id]);
  }
  //**********delete a project */

  onDelete(id: string) {
    this.projectService.deleteProject(id).subscribe((data) => {
      this.isLoading = true;
      this.projectService.getProjects().subscribe((projects: [Project]) => {
        this.isLoading = false;
        this.projects = projects;
        this.userId = this.authService.getUserId();
      });
    });
  }
}
