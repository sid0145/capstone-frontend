import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-developers-detail-page",
  templateUrl: "./developers-detail-page.component.html",
  styleUrls: ["./developers-detail-page.component.css"],
})
export class DevelopersDetailPageComponent implements OnInit {
  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
