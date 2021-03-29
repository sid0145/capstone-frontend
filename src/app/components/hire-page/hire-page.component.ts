import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-hire-page",
  templateUrl: "./hire-page.component.html",
  styleUrls: ["./hire-page.component.css"],
})
export class HirePageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.form.value);
  }
}
