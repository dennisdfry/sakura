import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'akura';
}
