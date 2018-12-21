import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-date',
  template: `
    <mat-form-field class="demo-full-width margin-top" appearance="outline" [formGroup]="group">

    <mat-label>{{field?.label}}</mat-label>

    <input matInput [matDatepicker]="picker" [min]="field.min_max_validation ? field?.min_max_date[0] : null" [max]="field.min_max_validation ? field?.min_max_date[1] : null" [formControlName]="field?.name" [placeholder]="field?.label">
  
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  
    <mat-datepicker #picker disabled="false"></mat-datepicker>
  
    <mat-hint></mat-hint>
  
    <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  
    <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  
    </ng-container>
  
    </mat-form-field>
  `,
  styles: []
})
export class DateComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
