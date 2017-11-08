import { MyCoolComponent } from './components/my-cool.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private _text_prop = 'Hello world';
  public changed_text: string;
  public get text_prop(): string {
    return this._text_prop;
  }
  public set text_prop(value: string) {
    this._text_prop = value;
  }

  @ViewChild('#child')
  public child: ChildComponentComponent;

  @ViewChild('#cool')
  public cool: MyCoolComponent;

  public say_hello = false;

  ngOnInit(): void {

  }

  public oninput(event: any): void {
    this.text_prop = event.target.value;
  }

  public onDisplayTextChanged(evt: string): void {
    this.changed_text = evt;
  }

  public hello(): void {
    this.say_hello = !this.say_hello;
    this.child.setText(this._text_prop);
  }
}
