import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heder } from './shared/components/heder/heder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-cliente-moderno');
}
