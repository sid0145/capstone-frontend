import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";
import * as $ from "jquery";

@Component({
  selector: "app-edit-project",
  templateUrl: "./edit-project.component.html",
  styleUrls: ["./edit-project.component.css"],
})
export class EditProjectComponent implements OnInit {
  projectData: Project = {
    projectname: "",
    aboutproject: "",
    paymentMethod: "",
    skill: "",
    esimatedBudget: "",
  };

  isLoading = false;
  private id: string;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.isLoading = true;
    //********************jquery for selector */
    var $select1 = $("#select1"),
      $select2 = $("#select2"),
      $options = $select2.find("option");

    $select1
      .on("change", function () {
        $select2.html($options.filter('[value="' + this.value + '"]'));
      })
      .trigger("change");

    //****************fetch the id and pass for get the data */
    this.id = this.route.snapshot.params["id"];
    this.projectService
      .getProjectById(this.id)
      .subscribe((project: Project) => {
        this.isLoading = false;
        this.projectData = project;
      });
  }

  //**************submitting new data */
  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.snackBar.open("form's value must be valid", "error", {
        duration: 2000,
      });
      return;
    }
    if (form.value.projectName.trim().length <= 8) {
      this.snackBar.open(
        "project name field must be greater than 8 excluded spaces.",
        "error",
        {
          duration: 2000,
        }
      );
      return;
    }
    if (form.value.aboutProject.trim().length <= 15) {
      this.snackBar.open(
        "about field must be greater than 15 excluded spaces.",
        "error",
        {
          duration: 2000,
        }
      );
      return;
    }
    let esimatedBudgetValue = $("#select2 option:selected").text();
    form.value.esimatedBudget = esimatedBudgetValue;
    form.value._id = this.id;
    this.projectService.editProject(form.value);
  }
}
