import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.projectService
      .getProjectById(this.id)
      .subscribe((project: Project) => {
        this.projectData = project;
        console.log(this.projectData);
      });
  }
}
