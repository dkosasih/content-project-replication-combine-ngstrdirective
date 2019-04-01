import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import {of, Observable, Subject} from 'rxjs';
import {switchMap}from 'rxjs/operators';

export abstract class SetEditable {
  abstract setEditState(value: boolean);
}

@Component({
  selector: 'hello',
  template: `<h3 [style.background-color]="(isEdit|async)?'blue':'red'">Hello {{name}}!</h3>
  <div *ngIf="(isEdit|async)" >
    Editing part
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [
        { provide: SetEditable, useExisting: forwardRef(() => HelloComponent)}
   ]
})
export class HelloComponent implements SetEditable {
  @Input() name: string;

  private _isEdit: Subject<boolean>= new Subject<boolean>();

  readonly isEdit: Observable<boolean> = this._isEdit.pipe(switchMap(x=>of(x)));
  
  setEditState(value: boolean) {
    this._isEdit.next(value);
  }
}
