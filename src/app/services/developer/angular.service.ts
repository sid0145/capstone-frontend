import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { DeveloperModel, DevelopersWithPage } from "../developer.model";
import { environment } from "../../../environments/environment";
import { Observable, Subject } from "rxjs";

const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class AngularService {
  angularDeveloper: DeveloperModel[] = [];

  private angularDeveloperUpdated = new Subject<{
    developers: DeveloperModel[];
    developerCount: number;
  }>();
  constructor(private http: HttpClient) {}

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
}
