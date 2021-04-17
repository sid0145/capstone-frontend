import { Component, OnInit } from "@angular/core";
import { Developer } from "src/app/admin-landing-page/pages/angular-developer/angular-developer.component";
import { HireService } from "src/app/services/developer/hire.service";
import { ProjectService } from "src/app/services/project/project.service";

export interface RequestModel {
  projectType: string;
  developer: Developer;
  date: Date;
  action: "";
}
export interface RequestModel1 {
  projectName: string;
  paymentMethod: string;
  estimatedBudget: string;
  date: Date;
  action: "";
}

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  constructor(
    private hireService: HireService,
    private projectService: ProjectService
  ) {}
  //******************for hire request */
  isLoading = false;
  displayedColumns: string[] = [
    "Sn",
    "Developer Name",
    "Date",
    "Project Type",
    "Action",
  ];
  dataSource: RequestModel[] = [];

  //*****************for project uploaded */
  isLoading1 = false;
  displayedColumns1: string[] = [
    "Sn",
    "Project Name",
    "Date",
    "Budget",
    "Action",
  ];
  dataSource1: RequestModel1[] = [];

  ngOnInit() {
    this.isLoading = true;
    this.isLoading1 = true;
    this.hireService.getHireData().subscribe((data: RequestModel[]) => {
      this.isLoading = false;
      this.dataSource = data;
      console.log(this.dataSource);
    });
    this.projectService
      .getProjectsByCreator()
      .subscribe((data: RequestModel1[]) => {
        this.isLoading1 = false;
        this.dataSource1 = data;
      });
  }
}
