import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormSumaComponent } from "./componentes-bs/form-suma/form-suma.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormSumaComponent]
})
export class AppComponent {
  title = 'app-forms-bootstrap';
}
