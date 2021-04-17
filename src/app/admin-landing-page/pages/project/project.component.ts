import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  displayedColumns: string[] = [
    "index",
    "projectname",
    "author",
    "date",
    "action",
  ];

  dataSource: Project[] = [];
  isLoading = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.isLoading = false;
      this.dataSource = data;
    });
  }

  //********************delete handler */
  deleteHandler(id: string) {
    this.projectService.deleteProject(id).subscribe((data) => {
      this.isLoading = true;
      this.projectService.getProjects().subscribe((data: Project[]) => {
        this.isLoading = false;
        this.dataSource = data;
      });
    });
  }

  //************view project */
  projectView(id) {
    this.router.navigate(["admin", "dashboard", "admin-project-view", id]);
  }
}
