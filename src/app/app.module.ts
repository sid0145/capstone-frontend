import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { ResisterComponent } from "./components/auth/resister/resister.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OutstoryComponent } from './components/outstory/outstory.component';
import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
