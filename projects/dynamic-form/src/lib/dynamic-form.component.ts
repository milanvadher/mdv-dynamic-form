import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldConfig } from "../public_api";

@Component({
  selector: 'mdv-dynamic-form',
  template: `
  <form class="dynamic-form" [formGroup]="form">
  <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
  </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {

  // Public variables
  @Input() fields: FieldConfig[] = [];
  form: FormGroup;

  /**
   * Constructor
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder) { }


  // ---------------------------------------------------------------------------
  //  @Lifecycle Hooks
  // ---------------------------------------------------------------------------

  /**
   * On Init
   */
  ngOnInit() {
    this.form = this.createControl();
  }


  // ---------------------------------------------------------------------------
  //  @Private Methods
  // ---------------------------------------------------------------------------

  /**
   * @returns form value
   */
  get value() {
    return this.form.value;
  }

  /**
   * Create form control of each fields 
   */
  private createControl() {
    const group = this.fb.group({});
    this.fields.forEach((field: FieldConfig) => {
      if (field.type === "button") return;
      const control = this.fb.control(field.value, this.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  }

  /**
   * Binding validation in form field
   *  
   * @param validations 
   */
  private bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid: { validator: any; }) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**
   * Validate all form field
   *  
   * @param formGroup 
   */
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }


  // ---------------------------------------------------------------------------
  //  @Public Methods
  // ---------------------------------------------------------------------------

  /**
   * Form submit
   * 
   * @returns form value if form is valid else validation error
   */
  public onSubmit() {
    if (this.form.valid) {
      return this.form.value;
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  /**
   * Form reset
   */
  public onReset() {
    this.form.reset();
  }

}
