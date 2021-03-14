import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  total: number;
}

@Component({
  selector: "app-developers-page",
  templateUrl: "./developers-page.component.html",
  styleUrls: ["./developers-page.component.css"],
})
export class DevelopersPageComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { name: "Angular Developers", total: 3 },
    { name: "Java Developers", total: 34 },
    { name: "React Developers", total: 12 },
    { name: "MEAN Stack Developers", total: 45 },
    { name: "MERN stack Developers", total: 56 },
    { name: "AI/ML Developers", total: 67 },
    { name: "Python Developers", total: 78 },
  ];
  displayedColumns: string[] = ["name", "total"];
  dataSource = this.ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}

  filterByItem(filterValue: string) {
    console.log(filterValue);
  }
}
