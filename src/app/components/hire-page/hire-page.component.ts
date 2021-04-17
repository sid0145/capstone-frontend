import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { HireService } from "src/app/services/developer/hire.service";

@Component({
  selector: "app-hire-page",
  templateUrl: "./hire-page.component.html",
  styleUrls: ["./hire-page.component.css"],
})
export class HirePageComponent implements OnInit {
  private developerId: string;
  hireData = {
    fullname: "",
    email: "",
    companyDes: "",
    projectType: "New Project",
  };

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private hireService: HireService
  ) {}

  ngOnInit() {
    this.developerId = this.route.snapshot.params["id"];
    console.log(this.developerId);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.snackbar.open("form's value must be valid", "error", {
        duration: 2000,
      });
      return;
    }
    let data = {
      developerId: this.developerId,
      fullname: form.value.fullname,
      email: form.value.email,
      companyDes: form.value.companyDes,
      projectType: form.value.projectType,
    };
    this.hireService.postHireData(data);
  }
}
