import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "../../admin.service";

@Component({
  selector: "app-add-developer",
  templateUrl: "./add-developer.component.html",
  styleUrls: ["./add-developer.component.css"],
})
export class AddDeveloperComponent implements OnInit {
  addDeveloperForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  //**************initiliazing the form */
  initForm() {
    this.addDeveloperForm = this.fb.group({
      name: [null],
      image: [null],
      email: [null],
      profession: [null],
      about: [null],
      experience: [null],
      city: [null],
      state: [null],
      country: [null],
      available: [null],
      doller: [null],
      instagram: [null],
      linkedIn: [null],
      facebook: [null],
      github: [null],
      portfolio: [null],
    });
  }

  //*************submit goes here */

  onSubmit() {
    if (this.addDeveloperForm.invalid) {
      return false;
    }
    const data = {
      name: this.addDeveloperForm.value.name,
      image: this.addDeveloperForm.value.image,
      email: this.addDeveloperForm.value.email,
      profession: this.addDeveloperForm.value.profession,
      about: this.addDeveloperForm.value.about,
      experience: this.addDeveloperForm.value.experience,
      city: this.addDeveloperForm.value.city,
      state: this.addDeveloperForm.value.state,
      country: this.addDeveloperForm.value.country,
      available: this.addDeveloperForm.value.available,
      doller: this.addDeveloperForm.value.doller,
      instagram: this.addDeveloperForm.value.instagram,
      linkedIn: this.addDeveloperForm.value.linkedIn,
      facebook: this.addDeveloperForm.value.facebook,
      github: this.addDeveloperForm.value.github,
      portfolio: this.addDeveloperForm.value.portfolio,
    };
    this.adminService.createDeveloper(data);
    this.router.navigate(["admin", "dashboard", "angular-developer"]);
  }

  //**********************image picked */
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    this.addDeveloperForm.patchValue({ image: file });
    this.addDeveloperForm.get("image").updateValueAndValidity();
    // console.log(file);
    // console.log(this.addMemberForm);
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
}
