import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
    this.isLoading = false;
  }
}
