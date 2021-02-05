import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-resister",
  templateUrl: "./resister.component.html",
  styleUrls: ["./resister.component.css"],
})
export class ResisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-zA-Z]*$/),
        ],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }
    console.log(this.signUpForm.value.email);

    this.authService.createUser(
      this.signUpForm.value.username,
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
  }
}
