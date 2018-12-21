export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    type: 'input' | 'date' | 'select' | 'checkbox' | 'radiobutton';
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    min_max_validation?: boolean;
    min_max_date?: [Date, Date];
    collections?: any;
    value?: any;
    validations?: Validator[];
}