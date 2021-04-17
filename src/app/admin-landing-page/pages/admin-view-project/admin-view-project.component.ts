import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-admin-view-project",
  templateUrl: "./admin-view-project.component.html",
  styleUrls: ["./admin-view-project.component.css"],
})
export class AdminViewProjectComponent implements OnInit {
  projectData: Project;
  id: string;
  isLoading: boolean = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.id = this.route.snapshot.params["id"];
    this.projectService.getProjectById(this.id).subscribe((data) => {
      this.isLoading = false;
      this.projectData = data;
    });
  }

  onDelete(id: string) {
    this.projectService.deleteProject(id).subscribe((data) => {
      this.router.navigate(["admin", "dashboard", "projects"]);
    });
  }
  onReview(id: string) {
    this.projectService.reviewProject(id, this.projectData);
  }
}
