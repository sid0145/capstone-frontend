import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";
import { Project } from "../project.model";
const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  //*****************post a new project */

  postProject(
    projectName: string,
    aboutProject: string,

    paymentMethod: string,
    skill: string,
    esimatedBudget: string
  ) {
    const data = {
      projectName: projectName,
      aboutProject: aboutProject,
      paymentMethod: paymentMethod,
      skill: skill,
      esimatedBudget: esimatedBudget,
    };
    this.http.post(`${BACKEND_URL}/postProject`, data).subscribe(
      (data) => {
        this.router.navigate(["/latest-projects"]);
        this.snackbar.open("Project uploaded successfully!", "success", {
          duration: 2000,
        });
      },
      (err) => {
        this.router.navigate(["/"]);
        this.snackbar.open("o'ops Something Went wrong!", "error", {
          duration: 2000,
        });
      }
    );
  }

  //*****************get project by creator */

  getProjectsByCreator() {
    return this.http.get(`${BACKEND_URL}/getProjectByCreator`);
  }

  //**********************get all projects */

  getProjects() {
    return this.http.get(`${BACKEND_URL}/getProjects`);
  }

  //*********************get a single project */

  getProjectById(id: string) {
    return this.http.get(`${BACKEND_URL}/getProjectById/${id}`);
  }

  //***************editing a project -> if authorize */

  editProject(project: Project) {
    console.log(project);

    this.http
      .put(`${BACKEND_URL}/editProject/${project._id}`, project)
      .subscribe(
        (data) => {
          this.router.navigate(["/latest-projects"]);
          this.snackbar.open("project updated!", "success", {
            duration: 3000,
          });
        },
        (err) => {
          this.router.navigate(["/latest-projects"]);
          this.snackbar.open("oop's something went wrong!", "error", {
            duration: 3000,
          });
        }
      );
  }

  //*********************assigning a project */
  assignMe(id: string, projectData: Project) {
    this.http
      .put(`${BACKEND_URL}/assignMe/${id}`, projectData)
      .subscribe((data) => {
        this.router.navigate(["/latest-projects"]);
        this.snackbar.open("you have been opted for this project!", "success", {
          duration: 3000,
        });
      });
  }

  //******************review project */
  reviewProject(id: string, projectData: Project) {
    this.http
      .put(`${BACKEND_URL}/reviewProject/${id}`, projectData)
      .subscribe((data) => {
        this.router.navigate(["/admin", "/dashboard", "/projects"]);
        this.snackbar.open("you have reviewd this project!", "success", {
          duration: 3000,
        });
      });
  }
  //******************deleting a project  -> if authorize */
  deleteProject(id: string) {
    return this.http.delete(`${BACKEND_URL}/deleteProject/${id}`);
  }
}
