import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";

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
  isAdmin: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isAdmin = this.authService.getIsAdmin();
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
      .subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
      });
  }

  onLogout() {
    this.authService.logout();
    this.isAdmin = false;
  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
    this.adminSub.unsubscribe();
  }
}
