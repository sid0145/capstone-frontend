import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-view-project",
  templateUrl: "./view-project.component.html",
  styleUrls: ["./view-project.component.css"],
})
export class ViewProjectComponent implements OnInit {
  private id: string;
  projectData: Project;
  isLoading: boolean = false;

  role: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.role = this.authService.getRole();
    console.log(this.role);
    this.isLoading = true;
    this.id = this.route.snapshot.params["id"];
    this.projectService
      .getProjectById(this.id)
      .subscribe((project: Project) => {
        this.isLoading = false;
        this.projectData = project;
      });
  }

  assignMe() {
    this.projectService.assignMe(this.id, this.projectData);
  }
}
