import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;

  userIsAuthenticated: boolean;
  username: string;
  authSub: Subscription;
  adminSub: Subscription;
  role: string;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.role = this.authService.getRole();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.username = this.authService.getUserName();
    this.authSub = this.authService
      .getAuthStatusListner()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.username = this.authService.getUserName();
      });
    this.adminSub = this.authService
      .getAdminStatusListner()
      .subscribe((role) => {
        this.role = role;
      });

    /*******************scroll code */
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("#back-to-top").fadeIn();
        } else {
          $("#back-to-top").fadeOut();
        }
      });
      // scroll body to 0px on click
      $("#back-to-top").click(function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          400
        );
        return false;
      });
    });

    // //**************** setting opacity to the header/

    // window.addEventListener("scroll", function () {
    //   if (window.scrollY > 150) {
    //     document.querySelector(".navbar").style.opacity = 0.9;
    //   } else {
    //     document.querySelector(".navbar").style.opacity = 1;
    //   }
    // });
  }

  onLogout() {
    this.authService.logout();
    this.role = null;
  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
    this.adminSub.unsubscribe();
  }
}
