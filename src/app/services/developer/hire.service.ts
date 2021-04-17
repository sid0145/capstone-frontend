import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";

const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class HireService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  //**************************post a project data */
  postHireData(data: hireModel) {
    this.http.post(`${BACKEND_URL}/hireDeveloper`, data).subscribe(
      (data) => {
        this.router.navigate(["/project-request-page"]);
        this.snackBar.open("Requested Successfully", "success", {
          duration: 2000,
        });
      },
      (err) => {
        this.router.navigate(["/"]);
        this.snackBar.open("Something Went Wrong!", "error", {
          duration: 2000,
        });
      }
    );
  }

  //******************************get all projects */

  getHireData() {
    return this.http.get(`${BACKEND_URL}/hireRequests`);
  }
}

export interface hireModel {
  developerId?: string;
  fullname?: string;
  email?: string;
  companyDes?: string;
  projectType?: string;
}
