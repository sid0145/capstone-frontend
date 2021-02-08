import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  signInForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }
  onSubmit() {
    if (this.signInForm.invalid) {
      this.toastr.error("Invalid Form submission", "errror", {
        timeOut: 3000,
      });

      return;
    }
    this.authService.login(
      this.signInForm.value.email,
      this.signInForm.value.password
    );
  }
}
