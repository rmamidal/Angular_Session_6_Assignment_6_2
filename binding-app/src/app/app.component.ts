// Importing component and OnInit modules
import { Component, OnInit } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  /**Public variable */
  title: string;
  name: string;

  ngOnInit() {
    /** Assign values to the variable after OnInit */
    this.title = 'My Angular Binding Application';
    this.name = 'Raj';
  }

}
