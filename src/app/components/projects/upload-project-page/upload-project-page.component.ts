import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Project } from "../../../services/project.model";
import * as $ from "jquery";
import { MatSnackBar } from "@angular/material";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-upload-project-page",
  templateUrl: "./upload-project-page.component.html",
  styleUrls: ["./upload-project-page.component.css"],
})
export class UploadProjectPageComponent implements OnInit {
  projectData: Project = {
    projectname: "",
    aboutproject: "",
    paymentMethod: "Pay fixed Price",
    skill: "website design",
    esimatedBudget: "",
  };

  constructor(
    private snackbar: MatSnackBar,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    var $select1 = $("#select1"),
      $select2 = $("#select2"),
      $options = $select2.find("option");

    $select1
      .on("change", function () {
        $select2.html($options.filter('[value="' + this.value + '"]'));
      })
      .trigger("change");
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.snackbar.open("form's value must be valid", "error", {
        duration: 2000,
      });
      return;
    }
    if (form.value.projectname.trim().length <= 8) {
      this.snackbar.open(
        "project name field must be greater than 8 excluded spaces.",
        "error",
        {
          duration: 2000,
        }
      );
      return;
    }
    if (form.value.aboutproject.trim().length <= 15) {
      this.snackbar.open(
        "about field must be greater than 15 excluded spaces.",
        "error",
        {
          duration: 2000,
        }
      );
      return;
    }
    let esimatedBudgetValue = $("#select2 option:selected").text();
    this.projectService.postProject(
      form.value.projectname,
      form.value.aboutproject,
      form.value.paymentMethod,
      form.value.skill,
      esimatedBudgetValue
    );
  }
}
