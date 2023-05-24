import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMore :boolean = false
  show(): void{
    this.showMore = !this.showMore
  }
}
