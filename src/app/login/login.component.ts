import { Component, OnInit, OnDestroy } from "@angular/core";

import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  public focus1;
  public focus2;
  constructor(

    private navigator: Router
  ) {}

  ngOnInit() {
    var $page = document.getElementsByClassName("full-page")[0];
    var image_src;
    var image_container = document.createElement("div");
    image_container.classList.add("full-page-background");
    $page.classList.add("register-page");
    image_container.style.backgroundImage = "url(assets/img/bg16.jpg)";
    $page.appendChild(image_container);
  }
  ngOnDestroy() {
    var $page = document.getElementsByClassName("full-page")[0];
    $page.classList.remove("register-page");
  }
//   async login() {
//     if (null) {
//       this.navigator.navigate(["/dashboard"]);
//     } else {
//       await this.auth.signin();
//       await this.navigator.navigate(["/dashboard"]);
//     }
//   }
}
