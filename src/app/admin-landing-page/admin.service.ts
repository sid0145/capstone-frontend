import { HttpClient } from "@angular/common/http";
import { Developer } from "./developer";

import { environment } from "../../environments/environment";
import { Subject } from "rxjs";

import { User } from "./user.modal";

const BACKEND_URL = environment.api_url;

export class AdminService {
  constructor(private http: HttpClient) {}

  users: User[];
  countUsers: number;

  //****************subjects */
  private getUserUpdated = new Subject<{ users: User[]; userCount: number }>();

  //**********subjects ebd here */
  //***************developer starts here */
  createDeveloper(data: Developer) {
    const developerData = new FormData();
    developerData.append("name", data.name);
    developerData.append("image", data.image, data.name);
    developerData.append("email", data.email);
    developerData.append("memberType", data.memberType);
    developerData.append("profession", data.profession);
    developerData.append("about", data.about);
    developerData.append("experience", data.experience);
    developerData.append("city", data.city);
    developerData.append("state", data.state);
    developerData.append("country", data.country);
    developerData.append("available", data.available);
    developerData.append("doller", data.doller);
    developerData.append("instagram", data.instagram);
    developerData.append("linkedIn", data.linkedIn);
    developerData.append("facebook", data.facebook);
    developerData.append("github", data.github);
    developerData.append("portfolio", data.portfolio);
    console.log(developerData);
    this.http
      .post(`${BACKEND_URL}/addDeveloper`, developerData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  //***************get a developer by id */

  getDeveloper(id: string) {
    return this.http.get(`${BACKEND_URL}/getDeveloperById/${id}`);
  }

  //******************developer ends here */

  //********************************* users start here*/
  getAllUsers(developersPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${developersPerPage}&page=${currentPage}`;
    this.http
      .get<{ users: any; maxUsers: number }>(
        BACKEND_URL + "/getAllUsers" + queryParams
      )
      .subscribe((data) => {
        this.users = data.users;
        this.getUserUpdated.next({
          users: [...this.users],
          userCount: data.maxUsers,
        });
      });
  }

  getCountsUser() {
    return this.http.get<{ count: number }>(`${BACKEND_URL}/getCountUsers`);
  }
  getUpdatedUser() {
    return this.getUserUpdated.asObservable();
  }
  getUserById(id: string) {
    this.http.get(`${BACKEND_URL}/getUserById/${id}`).subscribe((data) => {
      console.log(data);
    });
  }
}
