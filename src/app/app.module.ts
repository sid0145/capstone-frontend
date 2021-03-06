import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

//******************toastr module  */
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OutstoryComponent } from "./static-pages/outstory/outstory.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TeamDetailsComponent } from "./static-pages/team-details/team-details.component";
import { AboutUsComponent } from "./static-pages/about-us/about-us.component";
import { ServicePageComponent } from "./components/service-page/service-page.component";
import { TestimonialPageComponent } from "./static-pages/testimonial-page/testimonial-page.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JavaDeveopersComponent } from "./components/pages/java-deveopers/java-deveopers.component";
import { AngularDeveopersComponent } from "./components/pages/angular-deveopers/angular-deveopers.component";
import { DevelopersDetailPageComponent } from "./components/pages/developers-detail-page/developers-detail-page.component";
import { UsPageComponent } from "./static-pages/us-page/us-page.component";
import { BaseComponent } from "./components/base/base.component";
import { DevelopersPageComponent } from "./components/developers-page/developers-page.component";
import { BidProjectPageComponent } from "./components/bid-project-page/bid-project-page.component";
import { TeamHirePageComponent } from "./components/team-hire-page/team-hire-page.component";

import { CarouselModule } from "ngx-owl-carousel-o";
import { AppMaterialModule } from "./material.module";
import { AdminService } from "./admin-landing-page/admin.service";
import { HirePageComponent } from "./components/hire-page/hire-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { JobsPageComponent } from "./components/jobs-page/jobs-page.component";
import { TermsComponent } from "./static-pages/terms/terms.component";
import { AuthInterceptor } from "./services/auth/auth-interceptor";
import { LatestProjectsPageComponent } from "./components/projects/latest-projects-page/latest-projects-page.component";
import { UploadProjectPageComponent } from "./components/projects/upload-project-page/upload-project-page.component";
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { ViewProjectComponent } from './components/projects/view-project/view-project.component';
import { CartComponent } from './components/projects/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResisterComponent,
    HomeComponent,
    NavbarComponent,
    OutstoryComponent,
    FooterComponent,
    TeamDetailsComponent,
    AboutUsComponent,
    ServicePageComponent,
    TestimonialPageComponent,
    ContactUsComponent,
    JavaDeveopersComponent,
    AngularDeveopersComponent,
    DevelopersDetailPageComponent,
    UsPageComponent,
    BaseComponent,
    DevelopersPageComponent,
    BidProjectPageComponent,
    TeamHirePageComponent,
    HirePageComponent,
    ProductsPageComponent,
    JobsPageComponent,
    TermsComponent,
    LatestProjectsPageComponent,
    UploadProjectPageComponent,
    EditProjectComponent,
    ViewProjectComponent,
    CartComponent,
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
    AppMaterialModule,
    CarouselModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AdminService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
