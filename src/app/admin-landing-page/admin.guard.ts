import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isRole = this.authService.getRole();
    let adminRole: boolean = false;
    console.log("admin gourd", adminRole);
    if (isRole !== "admin") {
      adminRole = false;
      this.toastr.info("you are not authroized!");
      this.router.navigate(["/dashboard"]);
    }
    if (isRole === "admin") {
      adminRole = true;
    }
    console.log("admin gourd", adminRole);
    return adminRole;
  }
}
