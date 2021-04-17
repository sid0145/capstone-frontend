import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";
import { User } from "src/app/services/auth/auth.model";
import { AdminService } from "../../admin.service";

export interface UserModel {
  email?: string;
  date?: Date;
  username?: string;
  action?: "";
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  isLoading = false;
  users: UserModel[] = [];
  resultLengths = 0;

  currentPage = 1;
  totalUsers = 0;
  usersperPage = 5;
  pageSizeOptions = [5, 10, 15];

  displayedColumns: string[] = ["index", "username", "email", "date", "action"];
  dataSource: UserModel[] = [];

  userSubscription: Subscription;

  ngOnInit() {
    this.isLoading = true;
    this.adminService.getAllUsers(this.usersperPage, this.currentPage);
    this.userSubscription = this.adminService
      .getUpdatedUser()
      .subscribe((userData: { users: User[]; userCount: number }) => {
        this.isLoading = false;
        this.totalUsers = userData.userCount;
        this.dataSource = userData.users;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.usersperPage = pageData.pageSize;
    this.adminService.getAllUsers(this.usersperPage, this.currentPage);
  }

  //*******************delete handler */

  deleteHandler(id: string) {
    console.log(id);
  }
}
