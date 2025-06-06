import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./global-components/nav-bar/nav-bar";
import { HomePage } from "./home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'bonta_casa';
}
