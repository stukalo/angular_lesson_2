import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  public display_text: string;

  ngOnInit() {
  }

  public setText(value: string): void {
    this.display_text = value;
  }

}
