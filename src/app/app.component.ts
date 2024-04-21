
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Hola mundo angular!! desde componente';
 users: string[] = ['gian','gianlu','gianluca','maida'];
 visible : boolean = false;

 setVisible(): void{
  this.visible = this.visible? false: true;
 }
}
