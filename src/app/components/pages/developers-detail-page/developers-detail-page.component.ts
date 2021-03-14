import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { AdminService } from "src/app/admin-landing-page/admin.service";
import { Developer } from "src/app/admin-landing-page/developer";
// import * as $ from "jquery";
// import Typed from "typed.js";
// import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-developers-detail-page",
  templateUrl: "./developers-detail-page.component.html",
  styleUrls: ["./developers-detail-page.component.css"],
})
export class DevelopersDetailPageComponent implements OnInit {
  isLoading = false;
  private id: string;
  developerDetail: Developer;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.id = this.route.snapshot.params.id;
    this.adminService.getDeveloper(this.id).subscribe((data) => {
      this.isLoading = false;
      this.developerDetail = data;
      console.log(this.developerDetail);
    });
  }
}
