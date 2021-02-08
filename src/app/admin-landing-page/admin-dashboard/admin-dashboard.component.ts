import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as $ from "jquery";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router, private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.success("Welocome Back Sir!", "Admin Page", {
      timeOut: 3000,
    });
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
  }
}
