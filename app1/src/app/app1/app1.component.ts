import { Component } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component {
  countries: string[] = ['USA', 'Canada', 'Mexico', 'UK', 'Germany'];

}
