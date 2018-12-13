import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-input',
  template: `
    <mat-form-field class="demo-full-width" appearance="outline" [formGroup]="group">

    <mat-label>{{field?.label}}</mat-label>

    <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
    
    <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
    
    <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
    
    </ng-container>
    
    </mat-form-field>
  `,
  styles: []
})
export class InputComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
