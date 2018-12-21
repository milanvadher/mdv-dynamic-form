import { Component, ViewChild } from '@angular/core';
import { DynamicFormComponent, FieldConfig } from 'dynamic-form';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngx-dynamic-form';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  options: FormGroup;
  condition = false;

  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      min_max_validation: true,
      min_max_date: [new Date(2018, 11, 20), new Date()],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: ["India", "UAE", "UK", "US"],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Country is required"
        }
      ]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Accept our terms"
        }
      ]
    }
  ];

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  save() {
    let value = this.form.onSubmit();
    console.log(value);
  }

  reset() {
    this.form.onReset();
  }

}
