import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./global-components/nav-bar/nav-bar";
import { HomePage } from "./home-page/home-page";
import { Footer } from "./home-page/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'bonta_casa';
}
