import { HttpClient } from "@angular/common/http";
import { Developer } from "./developer";

import { environment } from "../../environments/environment";
import { Subject } from "rxjs";

const BACKEND_URL = environment.api_url;

export class AdminService {
  constructor(private http: HttpClient) {}

  createDeveloper(data: Developer) {
    const developerData = new FormData();
    developerData.append("name", data.name);
    developerData.append("image", data.image, data.name);
    developerData.append("email", data.email);
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
    this.http
      .post(`${BACKEND_URL}/addAngularDeveloper`, developerData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  //*********get member length */
  // getLength() {
  // return this.membersLength;
  // }

  //****************get all Developers */
  // getDevelopers() {
  // return  this.http
  //     .get<{ developers: Developer[] }>(`${BACKEND_URL}/getAngularDevelopers`);
  //     // .subscribe((data) => {
  //     //   this.developers = data.developers;
  //     //   this.getDevloperUpdateListner.next({
  //     //     developers: [...this.developers],
  //     //   });
  //     // });
  // }

  // getDevelopersListener() {
  //   return this.getDevloperUpdateListner.asObservable();
  // }

  //***************get a developer by id */

  getDeveloper(id: string) {
    return this.http.get(`${BACKEND_URL}/getAngularDeveloper/${id}`);
  }

  //**************get member update listener */

  // getMemberUpdateListner() {
  // return this.memberUpdated.asObservable();
  // }
}
