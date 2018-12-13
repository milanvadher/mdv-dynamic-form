import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-select',
  template: `
    <mat-form-field class="demo-full-width margin-top" appearance="outline" [formGroup]="group">
    
    <mat-label>{{field?.label}}</mat-label>

    <mat-select [placeholder]="field.label" [formControlName]="field.name">
    
    <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
    
    </mat-select>
    
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
