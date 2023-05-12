import { Component } from '@angular/core';
import {routingAnimation} from "./Interfaces/app.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent {
  title = 'e-commerce';
  backgroundImageFooter = 'data:image/jpeg;base64,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';
}

