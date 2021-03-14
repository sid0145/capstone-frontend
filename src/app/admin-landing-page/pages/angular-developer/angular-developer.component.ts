import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface Developer {
  firstname: string;
  lastname: string;
  email: string;
  date: Date;
  action: string;
}

@Component({
  selector: "app-angular-developer",
  templateUrl: "./angular-developer.component.html",
  styleUrls: ["./angular-developer.component.css"],
})
export class AngularDeveloperComponent implements OnInit {
  displayedColumns: string[] = [
    "firstname",
    "lastname",
    "email",
    "date",
    "action",
  ];
  ELEMENT_DATA: Developer[] = [
    {
      firstname: "Siddhesh",
      lastname: "tripathi",
      email: "sid@gmail.com",
      date: new Date(),
      action: "",
    },
  ];
  dataSource = this.ELEMENT_DATA;

  constructor(private router: Router) {}

  ngOnInit() {}
  newDeveloper() {
    this.router.navigate(["admin", "dashboard", "angular-developer", "new"]);
  }
}
