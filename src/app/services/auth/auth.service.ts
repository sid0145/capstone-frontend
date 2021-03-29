import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

import { environment } from "../../../environments/environment";
import { User } from "./auth.model";
import jwt_decode from "jwt-decode";
import { ContentObserver } from "@angular/cdk/observers";

const BACKEND_URL = environment.api_url;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token: string;
  username: string;
  tokenTimer: any;
  isAuthenticated: boolean = false;
  role: string;
  userId: string;
  private authStatusListner = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  //**************************Creating new Account */
  createUser(username: string, email: string, password: string) {
    const data = { username: username, email: email, password: password };
    console.log(data);
    this.http.post(`${BACKEND_URL}/signUp`, data).subscribe(
      (data) => {
        console.log(data);
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

  //************************************** */
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  //*****************getUser id */
  getUserId() {
    return this.userId;
  }

  //**admin check */
  getRole() {
    return this.role;
  }
  //*************** */

  getAuthStatusListner() {
    return this.authStatusListner.asObservable();
  }

  //******************getting username
  getUserName() {
    return this.username;
  }

  //****************************************Signing  goes here */

  login(email: string, password: string) {
    const data = { email: email, password: password };
    this.http
      .post<{
        token: string;
        username: string;
        expiresIn: number;
        role: string;
        userId: string;
      }>(`${BACKEND_URL}/signIn`, data)
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.username = response.username;
            this.userId = response.userId;
            const role = response.role;
            this.role = role;
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveAuthData(
              token,
              expirationDate,
              this.username,
              this.role,
              this.userId
            );
            this.authStatusListner.next(true);
            this.router.navigate(["/"]);
            this.toastrService.success("Successfully Logged In!", "success", {
              timeOut: 3000,
            });
          }
        },
        (err) => {
          this.authStatusListner.next(false);
          this.toastrService.error("User not found", "error", {
            timeOut: 3000,
          });
        }
      );
  }

  //*decode token

  decodeToken(token: string) {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  //***************setting token time validation */
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  //*************************saving data into localstorage */
  private saveAuthData(
    token: string,
    expirationDate: Date,
    username: string,
    role: string,
    userId: string
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
  }

  //*******************clearing the local storage after logout
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  }

  //**************************automating the logout or setting token on particular time
  autoAuthUser() {
    const autoUserAuth = this.getAuthData();

    if (!autoUserAuth) {
      return;
    }
    const now = new Date();
    const expiresIn = autoUserAuth.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = autoUserAuth.token;
      this.isAuthenticated = true;
      this.username = autoUserAuth.username;
      this.role = autoUserAuth.role;
      this.userId = autoUserAuth.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListner.next(true);
    }
  }

  //****************get the auth data from the localstorage
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      username: username,
      role: role,
      userId: userId,
    };
  }

  //****************logout function */
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.username = null;
    this.role = null;
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/login"]);
    this.toastrService.info("Logged Out!", "success", {
      timeOut: 3000,
    });
  }
}
