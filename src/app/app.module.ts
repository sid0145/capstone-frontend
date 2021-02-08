import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

//******************toastr module  */
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OutstoryComponent } from "./components/outstory/outstory.component";
import { DemoPageComponent } from "./components/demo-page/demo-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TeamDetailsComponent } from "./components/team-details/team-details.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ServicePageComponent } from "./components/service-page/service-page.component";
import { TestimonialPageComponent } from "./components/testimonial-page/testimonial-page.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JavaDeveopersComponent } from "./components/pages/java-deveopers/java-deveopers.component";
import { AngularDeveopersComponent } from "./components/pages/angular-deveopers/angular-deveopers.component";
import { FaqComponent } from "./components/static/faq/faq.component";
import { DevelopersDetailPageComponent } from "./components/pages/developers-detail-page/developers-detail-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResisterComponent,
    HomeComponent,
    NavbarComponent,
    OutstoryComponent,
    DemoPageComponent,
    FooterComponent,
    TeamDetailsComponent,
    AboutUsComponent,
    ServicePageComponent,
    TestimonialPageComponent,
    ContactUsComponent,
    JavaDeveopersComponent,
    AngularDeveopersComponent,
    FaqComponent,
    DevelopersDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
