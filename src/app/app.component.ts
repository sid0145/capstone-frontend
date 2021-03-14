import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./services/auth/auth.service";
import { fadeAnimation } from "./myanimations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}
  token: string;
  tokenInof: any;
  ngOnInit() {
    this.authService.autoAuthUser();
    this.token = this.authService.getToken();
    this.tokenInof = this.authService.decodeToken(this.token);
  }
  onActivate(event) {
    window.scroll(0, 0);
  }

  // getState(outlet) {
  //   return outlet.isActivated
  //     ? outlet.activatedRoute.snapshot.url[0].path
  //     : "none";
  // }
}
