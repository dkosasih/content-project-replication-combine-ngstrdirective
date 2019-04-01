import { Component, Directive, OnInit, ContentChildren, ContentChild, QueryList, AfterContentInit, Input, TemplateRef } from '@angular/core';
import { HelloComponent, SetEditable } from '../hello.component';
import { EditableDirective } from '../editable.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit {

  @ContentChildren(EditableDirective, { read: SetEditable })
  helloComponents: QueryList<SetEditable>;

  @ContentChild(EditableDirective, {read: TemplateRef})
  alternativeElement: TemplateRef<any>;

  constructor() { }

  isEdit: boolean;
  
  onEdit() {
    this.isEdit = !this.isEdit;
  
    if (this.helloComponents.length > 0) {
      this.helloComponents.first.setEditState(this.isEdit);
    }
  }

  get editContext() {
    return {
      $implicit: this.isEdit
    };
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }
}