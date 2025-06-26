import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Description } from "./components/description/description";

@Component({
  selector: 'app-home-page',
  imports: [Hero, Description],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
