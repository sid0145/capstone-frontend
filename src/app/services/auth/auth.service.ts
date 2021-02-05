import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { environment } from "../../../environments/environment";
import { User } from "./auth.model";

const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  createUser(username: string, email: string, password: string) {
    const data = { username: username, email: email, password: password };
    this.http.post(`${BACKEND_URL}/signUp`, data).subscribe(
      (data) => {
        this.router.navigate(["/login"]);
        this.toastrService.success("Account created! Please login", "success", {
          timeOut: 3000,
        });
      },
      (err) => {
        this.toastrService.error("Email already exists", "error", {
          timeOut: 3000,
        });
      }
    );
  }
}
