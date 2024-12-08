import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: '<p>landing-page works!</p>',
  styles: ['h1 {color: red;}']
})
export class LandingPageComponent {

}
