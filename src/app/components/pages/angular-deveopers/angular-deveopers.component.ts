import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { DeveloperModel } from "src/app/services/developer.model";
import { AngularService } from "src/app/services/developer/angular.service";

@Component({
  selector: "app-angular-deveopers",
  templateUrl: "./angular-deveopers.component.html",
  styleUrls: ["./angular-deveopers.component.css"],
})
export class AngularDeveopersComponent implements OnInit, OnDestroy {
  isLoading = false;
  developers: DeveloperModel[] = [];
  resultLengths = 0;

  currentPage = 1;
  totalDevelopers = 0;
  developersperPage = 2;
  pageSizeOptions = [1, 2, 5];

  displayedColumns: string[] = ["fullname", "Availablity", "action"];
  dataSource: DeveloperModel[] = [];

  developerSubscription: Subscription;

  constructor(private router: Router, private angularService: AngularService) {}

  ngOnInit() {
    this.isLoading = true;
    this.angularService.getAngularDeveloper(
      this.developersperPage,
      this.currentPage
    );
    this.developerSubscription = this.angularService
      .getAngularDeveloperUpdateListner()
      .subscribe(
        (developerData: {
          developers: DeveloperModel[];
          developerCount: number;
        }) => {
          this.isLoading = false;
          this.totalDevelopers = developerData.developerCount;
          this.dataSource = developerData.developers;
        }
      );
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    console.log(this.currentPage);
    this.developersperPage = pageData.pageSize;
    this.angularService.getAngularDeveloper(
      this.developersperPage,
      this.currentPage
    );
  }

  //*****************getting full details */
  moreDetails(id: string) {
    this.router.navigate(["/developer-detail-page", id]);
  }

  //****************hire handler */
  hireHandler(id: string) {
    this.router.navigate(["/hire-me", id]);
  }
  //******************redirecting to hiring page */
  getHim() {}

  //***************************************filter the list by name */

  filterByItem(filterValue: string) {
    filterValue = filterValue.trim();
    console.log(filterValue);
    // this.invoiceService
    //   .getInvoices({ page: 1, perPage: 10, filter: filterValue })
    //   .subscribe(
    //     (data) => {
    //       this.dataSource = data.docs;
    //       this.resultLengths = data.total;
    //     },
    //     (err) => {
    //       this.snackBar.open("oop's something went wrong", "error", {
    //         duration: 2000,
    //       });
    //       this.isLoading = false;
    //     }
    //   );
  }

  ngOnDestroy() {
    this.developerSubscription.unsubscribe();
  }
}
