import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
})
export class App {
  protected title = 'app-fundacion-villanueva';
}
