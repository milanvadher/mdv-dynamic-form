# MDV-Dynamic-Form

* Install following

    ```bash
    ng add @angular/material @angular/cdk

    npm install --save @angular/material-moment-adapter moment
    ```

* Import `DynamicFormModule` in `app.module.ts`.

    ```ts
    import { DynamicFormModule } from 'dynamic-form';
    ```

    and add into imports

    ```ts
    @NgModule({
        declarations: [
            ...
        ],
        imports: [
            ...
            DynamicFormModule
        ]
    })
    ```

* Now you are good to go

* For use in any component

  * Add `mdv-dynamic-form` in .html file

    ```html
    <mdv-dynamic-form [fields]="regConfig" (submit)="submit($event)"></mdv-dynamic-form>
    ```

  * And .ts file is look like this

    ```ts
    import { Component, ViewChild } from '@angular/core';
    import { DynamicFormComponent, FieldConfig } from 'dynamic-form';
    import { Validators } from '@angular/forms';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    title = 'mdv-dynamic-form';
    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

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
            value: "Male"
            },
            {
            type: "date",
            label: "DOB",
            name: "dob",
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
            value: "UK",
            options: ["India", "UAE", "UK", "US"]
            },
            {
            type: "checkbox",
            label: "Accept Terms",
            name: "term",
            value: true
            },
            {
            type: "button",
            label: "Save"
            }
        ];

        submit(value) {
            console.log(value)
        }
    }
    ```

  * Add this in style.css

    ```css
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    body {
        margin: 10px;
    }

    .demo-full-width {
        width: 100%;
    }

    .margin-top {
        margin-top: 15px;
    }

    .margin-left {
        margin-left: 10px;
    }

    .radio-label-padding {
        padding-right: 10px;
        color: grey;
    }

    .form {
        margin-left: 10px;
        border: 2px solid lightgray;
        width: 600px;
        padding-left: 5px;
        margin-top: 10px;
    }
    ```

* Thats it.