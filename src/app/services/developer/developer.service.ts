import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { DeveloperModel, DevelopersWithPage } from "../developer.model";
import { environment } from "../../../environments/environment";
import { Observable, Subject } from "rxjs";

const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class DeveloperService {
  constructor(private http: HttpClient) {}

  //****angular develoeper */
  angularDeveloper: DeveloperModel[] = [];

  private angularDeveloperUpdated = new Subject<{
    developers: DeveloperModel[];
    developerCount: number;
  }>();

  getAngularDeveloper(developersPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${developersPerPage}&page=${currentPage}`;

    this.http
      .get<{ message: string; developers: any; maxDevelopers: number }>(
        BACKEND_URL + "/getAngularDevelopers" + queryParams
      )
      .subscribe((data) => {
        this.angularDeveloper = data.developers;
        this.angularDeveloperUpdated.next({
          developers: [...this.angularDeveloper],
          developerCount: data.maxDevelopers,
        });
      });
  }

  getAngularDeveloperUpdateListner() {
    return this.angularDeveloperUpdated.asObservable();
  }
  //*************angular developer ends here */

  //****************java developer */
  javaDeveloper: DeveloperModel[] = [];

  private javaDeveloperUpdated = new Subject<{
    developers: DeveloperModel[];
    developerCount: number;
  }>();

  getJavaDeveloper(developersPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${developersPerPage}&page=${currentPage}`;

    this.http
      .get<{ message: string; developers: any; maxDevelopers: number }>(
        BACKEND_URL + "/getJavaDevelopers" + queryParams
      )
      .subscribe((data) => {
        this.javaDeveloper = data.developers;
        this.javaDeveloperUpdated.next({
          developers: [...this.javaDeveloper],
          developerCount: data.maxDevelopers,
        });
      });
  }

  getJavaDeveloperUpdateListner() {
    return this.javaDeveloperUpdated.asObservable();
  }
}
