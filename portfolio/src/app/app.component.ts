import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
})
export class AppComponent {
  title = 'portfolio';
}
