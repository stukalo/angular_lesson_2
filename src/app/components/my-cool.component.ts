import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-my-cool',
    templateUrl: './my-cool.component.html',
    styleUrls: [ './my-cool.component.css' ],
})
export class MyCoolComponent implements OnChanges, OnInit  {
    constructor(private cdr: ChangeDetectorRef) { }

    @Input()
    public text: string;

    public display_text: string;
    @Output()
    displayTextChanged: EventEmitter<string> = new EventEmitter();

    ngOnInit(): void {
        this.setDisplayText();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('text' in changes) {
            this.setDisplayText();
        }
    }

    setDisplayText(): void {
        this.display_text = this.text + ' Valera';
        this.displayTextChanged.next(this.display_text);
    }
}
