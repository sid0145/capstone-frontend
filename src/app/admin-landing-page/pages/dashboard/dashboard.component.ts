import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { Builder } from "protractor";
import { User } from "src/app/services/auth/auth.model";
import { AdminService } from "../../admin.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  chart = [];
  totalUsers: number;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getCountsUser().subscribe((data: { count: number }) => {
      this.totalUsers = data.count;
    });
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: [
          "nov-2020",
          "dec-2020",
          "jan-2021",
          "feb-2021",
          "march-2021",
          "april-2021",
          "may-2021",
          "june-2021",
        ],
        datasets: [
          {
            label: "activities",
            data: [1, 23, 14, 25],
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false,
          },
        ],
      },
    });
  }
}
